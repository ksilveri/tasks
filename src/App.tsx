import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>
                {" "}
                <span style={{ color: "pink" }}>New Header</span>
            </h1>
            <img
                src="puppyimage.jpeg"
                alt="A beagle puppy making his first howl!"
            />
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
                        The Best Dogs
                        <ul>
                            <li>beagle</li>
                            <li>golden retriever</li>
                            <li>husky</li>
                            <li>pitbull</li>
                            <li>Australian Shepherd</li>
                        </ul>
                    </Col>
                    <Col> The Best Cats</Col>
                    <ul>
                        <li>Tabby</li>
                        <li>Calico</li>
                        <li>Siamese</li>
                        <li>Sphynx</li>
                    </ul>
                </Row>
            </Container>
        </div>
    );
}

export default App;
