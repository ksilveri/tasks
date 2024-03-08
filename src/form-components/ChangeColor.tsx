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

    const colorChange = (color: string) => {
        setColorChoice(color === colorChoice ? "on" : color);
    };
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <div key={color} className="form-check-inline">
                    <Form.Check
                        type="radio"
                        name="color"
                        id={"color-${color}"}
                        value={color}
                        checked={colorChoice === color}
                        onChange={() => colorChange(color)}
                        className="form-check-inline"
                    />
                    <label
                        htmlFor={"color-${color}"}
                        style={{ backgroundColor: color }}
                    >
                        {color}
                    </label>
                </div>
            ))}
            <div>
                <p>
                    You have chosen{" "}
                    <span
                        data-testid="colored-box"
                        style={{ backgroundColor: colorChoice }}
                    >
                        {colorChoice}
                    </span>
                </p>
            </div>
        </div>
    );
}
