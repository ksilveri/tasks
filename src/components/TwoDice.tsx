import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    /*** need 2 states for each die
     * each die's value should be rendered in the View in a span tag of their own
        *first dice having the data-testid of left-die
        *second dice having the data-testid of right die

     * need 2 roll buttons (Roll Left and Roll Right)
     * clicking a roll button will change the value (use the d6 function)
     * initial values of the dice cannot be the same
     * when 2 states are =, render a message the includes Lose
     * when the two states are =, render a message that include Win
     * you lose if you get 2 ones (snake eyes) 
     */

    const [dieOne, setDieOne] = useState<number>(3);
    const [dieTwo, setDieTwo] = useState<number>(2);

    function rollLeft(): void {
        const newRoll = d6();
        setDieOne(newRoll);
        checkRoll(newRoll, dieTwo);
    }

    function rollRight(): void {
        const newRoll = d6();
        setDieTwo(newRoll);
        checkRoll(dieOne, newRoll);
    }

    function checkRoll(roll1: number, roll2: number): void {
        if (roll1 === 1 && roll2 === 1) {
            console.log("Lose");
        } else {
            console.log("Win");
        }
    }
    return (
        <div>
            <div>
                <span data-testid="left-die">{dieOne}</span>
                <Button onClick={rollLeft}>Roll Left</Button>
            </div>
            <div>
                <span data-testid="right-die">{dieTwo}</span>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {dieOne === 1 && dieTwo === 1 && <p>Lose</p>}
            {dieOne === dieTwo && !(dieOne === 1 && dieTwo === 1) && <p>Win</p>}
        </div>
    );
}
