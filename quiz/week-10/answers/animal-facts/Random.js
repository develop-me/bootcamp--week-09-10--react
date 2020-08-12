import React, { Component } from "react";

import axios from "../axios";

import { Card } from "react-bootstrap";

class AnimalFactsGet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            fact: "",
            by: "",
            madeUp: false,
        };
    }

    componentDidMount() {
        axios.get("/animal-facts/random").then(({ data }) => {
            this.setState({
                loaded: true,
                fact: data.data.fact,
                madeUp: data.data.made_up,
                by: data.data.by,
            });
        });
    }

    render() {
        let { fact, madeUp, by, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : (
            <Card bg={ madeUp? "danger" : "success" } text="white" className="mt-4">
                <Card.Header>
                    <strong>Amazing Animal Facts!</strong>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        { fact }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-right">
                    Submitted by <strong>{ by }</strong>
                </Card.Footer>
            </Card>
        );
    }
}

export default AnimalFactsGet;
