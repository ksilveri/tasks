/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    /*** need 5 holidays
     * create 2 buttons that let you cycle through each holiday
     * need one state either a string or an enum of 5 strings
     *
     * define 2 functions that can take the exisiting holiday and produce the next holiday
     *one should produce alphabettically
     *second the next holiday in the year
     * view should render the current holiday with the text Holiday: followed by the emoji
     * first button should include the text Alphabet
     * second button should include the text Year
     
     * Easter - march 31
     * Independence Day - july 4
     * New Years Day - jan 1
     * St. Patricks Day - march 17
     * Valentines Day - feb 14
     *  */

    type Holiday = "🎉" | "💕" | "☘️" | "🐇" | "🎆";

    const [holiday, setHoliday] = useState<Holiday>("🎉");

    function alphabet(): void {
        setHoliday(
            holiday === "🐇"
                ? "🎆"
                : holiday === "🎆"
                ? "🎉"
                : holiday === "🎉"
                ? "☘️"
                : holiday === "☘️"
                ? "💕"
                : "🐇"
        );
    }

    function year(): void {
        setHoliday(
            holiday === "🎉"
                ? "💕"
                : holiday === "💕"
                ? "☘️"
                : holiday === "☘️"
                ? "🐇"
                : holiday === "🐇"
                ? "🎆"
                : "🎉"
        );
    }

    return (
        <div>
            <div>
                <span data-testid="Holiday: "> Holiday: {holiday} </span>
                <Button onClick={alphabet}>Alphabet</Button>
            </div>
            <div>
                <Button onClick={year}>Year</Button>
            </div>
        </div>
    );
}
