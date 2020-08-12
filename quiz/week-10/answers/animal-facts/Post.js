import React, { Component } from "react";

import axios from "../axios";

import { Alert, Button, Card, Form } from "react-bootstrap";

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            fact: "",
            madeUp: false,
        };

        this.handleChangeFact = this.handleChangeFact.bind(this);
        this.handleChangeMadeUp = this.handleChangeMadeUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
    }

    handleRefresh() {
        this.setState({
            submitted: false,
            fact: "",
            madeUp: false
        });
    }

    handleChangeFact(e) {
        if (e.currentTarget.value.length <= 255) {
            this.setState({ fact: e.currentTarget.value });
        }
    }

    handleChangeMadeUp(e) {
        this.setState({ madeUp: e.currentTarget.checked });
    }

    handleSubmit(e) {
        e.preventDefault();

        let { fact, madeUp } = this.state;

        if (fact.length > 0) {
            axios.post("/animal-facts", {
                fact: fact,
                made_up: madeUp,
            }).then(({ data }) => {
                this.setState({ submitted: true, });
            });
        }
    }

    render() {
        let { submitted, fact, madeUp } = this.state;

        return submitted ?
            <>
                <Alert variant="success" className="mt-4">
                    Fact submitted!
                </Alert>
                <Button onClick={ this.handleRefresh }>Another!</Button>
            </>
            : (
            <Card bg="light" className="mt-4">
                <Card.Header>
                    <strong>Submit an Animal Fact!</strong>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={ this.handleSubmit }>
                        <Form.Group>
                            <Form.Label>Fact</Form.Label>
                            <Form.Control
                                as="textarea"
                                onChange={ this.handleChangeFact }
                                value={ fact }
                            />
                            <Form.Text className="text-muted">
                                <strong>Remaining characters:</strong> { 255 - fact.length }
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Check
                                label="Made up?"
                                checked={ madeUp }
                                onChange={ this.handleChangeMadeUp }
                            />
                        </Form.Group>
                        <Button
                            type="submit"
                            disabled={ fact.length === 0 }
                        >Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

export default Post;
