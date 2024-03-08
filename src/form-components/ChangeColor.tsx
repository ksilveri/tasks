import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    /*** choosing a radio button updates the text and color of a nearby box of text

     * need a state to represent the chosen color
     * AT LEAST 8 unique colors
     * (pink, red, green, blue, purple, black, yellow, orange, brown)
     * each color must be represented by a radio button
     * should be a box of text with a data-testid="colored-box" attribute and value
     * box of text should have the same backgroundColor style as the currently selected radio button

     * USE MAP TO RENDER ALL THE COLOR'S FORM.CHECK TAGS
     * USE INLINE ATTRIBUTE FOR THE RADIO BUTTONS
     */

    const colors = [
        "pink",
        "red",
        "green",
        "blue",
        "purple",
        "black",
        "yellow",
        "orange",
        "brown"
    ];
    const [colorChoice, setColorChoice] = useState<string>("pink");

    function updateColor(color: string) {
        setColorChoice(color);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <Form.Check
                    key={color}
                    inline
                    type="radio"
                    name="colors"
                    id={"color-${color}"}
                    label={color}
                    style={{ backgroundColor: color }}
                    //value={colors}
                    checked={colorChoice === color}
                    onChange={() => updateColor(color)}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: colorChoice
                }}
            />
            <p>
                You have chosen{" "}
                <span style={{ backgroundColor: colorChoice }}>
                    {colorChoice}
                </span>
                .
            </p>
        </div>
    );
}
