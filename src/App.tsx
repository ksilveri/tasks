import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import image from "./puppyimage.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <style>
                    <div id="FF0000"></div>; UD CISC275 with React Hooks and
                    TypeScript
                </style>
            </header>
            <h1> New Header</h1>
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
                            <li>Beagle</li>
                            <li>Golden retriever</li>
                            <li>Husky</li>
                            <li>Pitbull</li>
                            <li>Australian Shepherd</li>
                        </ul>
                    </Col>
                    <Col>
                        The Best Cats
                        <ul>
                            <li>Tabby</li>
                            <li>Calico</li>
                            <li>Siamese</li>
                            <li>Sphynx</li>
                            <li>Persian</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
