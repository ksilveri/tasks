import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { formatWithOptions } from "util";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    /*** allows a user to select an answer from a list in a dropdown
     * then displays whther they got it correct or incorrect
     * takes in a parameter representing expectedAnswer and a parameter represting a list of option
     
     * need a state to represent the user's currently selected choice
     * initial state of the selected choice is the first element of the options list
     * when the user's given answer matches the expectedAnswer, display ✔️ otherwise display ❌
     */

    const [currentSelect, setCurrentSelect] = useState<string>(options[0]);
    const Correct = currentSelect === expectedAnswer;

    function updateCurrent(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentSelect(event.target.value);
    }

    /*function checkAnswer(): void {
        if (currentSelect === expectedAnswer) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }*/
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="MultipleChoice">
                <Form.Label>Choose:</Form.Label>
                <Form.Select value={currentSelect} onChange={updateCurrent}>
                    {options.map((option: string, index: number) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {Correct && <span>✔️</span>}
            {!Correct && <span>❌</span>}
        </div>
    );
}
