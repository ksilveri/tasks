import React from "react";
import "./App.css";
import puppy from "./puppyimage.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <h1>
                <span style={{ color: "pink" }}>New Header</span>
            </h1>
            <img src={puppy} alt="A beagle puppy making his first howl!" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Kelly Silveri. Hello World.
            </p>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                maxHeight: "500",
                                maxWidth: "200"
                            }}
                        >
                            <span style={{ color: "red" }}> Rectangle</span>
                        </div>
                        The Best Dogs
                        <ul>
                            <li>Beagle</li>
                            <li>Golden retriever</li>
                            <li>Husky</li>
                            <li>Pitbull</li>
                            <li>Australian Shepherd</li>
                        </ul>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                maxHeight: "300",
                                maxWidth: "200"
                            }}
                        >
                            <span style={{ color: "red" }}> Rectangle</span>
                        </div>

                        <li> </li>
                        <li> </li>
                        <li> </li>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
