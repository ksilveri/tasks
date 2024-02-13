import React from "react";
import "./App.css";
import puppy from "./puppyimage.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <span style={{ backgroundColor: "pink" }}>
                    UD CISC275 with React Hooks and TypeScript
                </span>
            </header>

            <h1>
                <span style={{ backgroundColor: "pink" }}>New Header</span>
            </h1>
            <img src={puppy} alt="A beagle puppy making his first howl!" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Kelly Silveri. Hello World.
            </p>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <ol>
                <li>test1</li>
                <li>test 2</li>
                <li>test3</li>
            </ol>
            <Container>
                <Row>
                    <Col>
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
                        The Best Cats
                        <ol>
                            <li>Tabby</li>
                            <li>Calico</li>
                            <li>Siamese</li>
                            <li>Sphynx</li>
                            <li>Persian</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
