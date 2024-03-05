import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    /*** need a boolean to determine whether or not the state is visible
     * need a button named Reveal Answer that with change the answer from visible to invisiible
     * when the button is clicked the answer should be visible
     */
    const [visible, setVisible] = useState<boolean>(false);

    function changeVisible(): void {
        setVisible(!visible);
    }
    return (
        <span>
            <Button onClick={changeVisible}>Reveal Answer</Button>
            {visible && <div>42</div>}
        </span>
    );
}
