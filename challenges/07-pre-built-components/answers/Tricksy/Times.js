import React, { Component } from "react";

import { Alert, Col, Row } from "react-bootstrap";
import TimeKeeper from 'react-timekeeper';

class Times extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: "12:00pm",
            second: "12:00pm",
        };

        this.handleFirst = this.handleFirst.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
    }

    handleFirst(value) {
        this.setState({ first: value.formatted24 });
    }

    handleSecond(value) {
        this.setState({ second: value.formatted24 });
    }

    render() {
        let { first, second } = this.state;
        let same = first === second;

        return (
            <>
                <Row className="mt-4">
                    <Col className="text-center">
                        <TimeKeeper
                            time={ first }
                            onChange={ this.handleFirst }
                        />
                    </Col>

                    <Col className="text-center">
                        <TimeKeeper
                            time={ second }
                            onChange={ this.handleSecond }
                        />
                    </Col>
                </Row>

                <Alert
                    className="mt-4"
                    variant={ same ? "success" : "danger" }
                >
                    { first === second ? "Same" : "Not same" }!
                </Alert>
            </>
        );
    }
}

export default Times;
