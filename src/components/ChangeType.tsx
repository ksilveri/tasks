import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    /*** 
     * handle whether the type is mcq or saq
     * initial type be saq
     *type of state should be Questiontype
     *buttom labeled Change Type that changes from mcq to saq

     * when type is mcq the text "Multiple Choice" be visible
     * when saq the text "Short Answer" be visible
     */
    const [answer, setAnswer] = useState<QuestionType>("short_answer_question");

    function changeAnswer(): void {
        setAnswer(
            answer === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    return (
        <span>
            <Button onClick={changeAnswer}>Change Type</Button>
            {answer === "short_answer_question" && <p> Short Answer </p>}
            {answer === "multiple_choice_question" && <p> Multiple Choice </p>}
        </span>
    );
}
