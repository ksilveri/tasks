import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    /***
     * simulates a user taking a quiz with a limited number of attempts
     * also provide a way for them to gain as many attempts as they want via numeric input box
     
     * need a state to represent the # of attempts the user has left
     * another state to represent the # of attempts being requested
     * intial number of attempts should be 3
     * # of attempts left should be visible
     * numeric input box where user can specify their requested # of attempts
     * 2 buttons: one labeled use that decreases the attempts by one
     *          : one labled gain that increases the attempts by amount in box
     * if the user attempts to request an invalid amount that can be an integer then do not change the attempts
     * when user is out of attempts, disable the use button
     */

    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");

    const attemptChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        const value = event.target.value;
        if (!isNaN(parseInt(value))) {
            setRequests(value);
        }
    };
    function decreaseAttempts(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function increaseAttempts(): void {
        const changeAttempts = parseInt(requests);
        if (!isNaN(changeAttempts) && changeAttempts > 0) {
            setAttempts(attempts + changeAttempts);
            setRequests("");
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Number:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={attemptChange}
                />
            </Form.Group>
            <span>
                <Button onClick={decreaseAttempts} disabled={attempts === 0}>
                    use
                </Button>
                <Button onClick={increaseAttempts}>gain</Button>
            </span>
            <p>Attempts: {attempts}</p>
        </div>
    );
}
