import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    /***
     * make a textbox
     * user enters a short answer question and display correct or incorrect
     * component takes in expectedAnswer
     * state to handle the user's given answer
     * user answer matches expected, display ✔️
     * other display ❌
     */
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");
    const takeUserAnswer: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setUserAnswer(event.target.value);
    };
    function checkAnswer(answer: string): JSX.Element {
        if (answer === expectedAnswer) {
            return <span>✔️</span>;
        } else {
            return <span>❌</span>;
        }
    }
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={userAnswer} onChange={takeUserAnswer} />
                {checkAnswer(userAnswer)};
            </Form.Group>
        </div>
    );
}
