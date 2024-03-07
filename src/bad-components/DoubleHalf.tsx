import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { dhValue, setDhValue } from "./DoubleHalfState";

interface doublerProps {
    setDoubler: (dhValue: number) => void;
    doubValue: number;
}

interface halfProps {
    setHalf: (halfValue: number) => void;
    halfValue: number;
}
function Doubler({ setDoubler, doubValue }: doublerProps): JSX.Element {
    return <Button onClick={() => setDoubler(2 * doubValue)}>Double</Button>;
}

function Halver({ setHalf, halfValue }: halfProps): JSX.Element {
    return <Button onClick={() => setHalf(0.5 * halfValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDoubler={setDhValue} doubValue={dhValue}></Doubler>
            <Halver setHalf={setDhValue} halfValue={dhValue}></Halver>
        </div>
    );
}
