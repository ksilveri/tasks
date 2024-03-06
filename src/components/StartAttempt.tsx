import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    /***
     * number of attempts: 4
     * boolean for whether quiz is in progress
     * button labeled Start Quiz (put quiz in progress and decreases attempts by 1)
     * button labeled Stop Quiz (stops quiz from being in progress)
     * button named Mulligan that increase attempts by 1
     * when quiz is not in progress, stop quiz button is disabled
     * when attempts are zero, the start quiz is disabled
     */
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startProgress(): void {
        setProgress(!progress);
        decreaseAttempt();
    }

    function endProgress(): void {
        setProgress(false);
    }

    function decreaseAttempt(): void {
        if (attempt > 0) {
            setAttempt(attempt - 1);
        }
    }

    function increaseAttempt(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <p>{attempt}</p>
            <Button
                onClick={startProgress}
                disabled={attempt === 0 || progress}
            >
                Start Quiz
            </Button>
            ;
            <Button onClick={endProgress} disabled={!progress}>
                Stop Quiz
            </Button>
            ;
            <Button onClick={increaseAttempt} disabled={progress}>
                Mulligan
            </Button>
            ;
        </div>
    );
}
