import React, { Component } from "react";

import { Alert, Col, Row } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class Times extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first: new Date(),
            second: new Date(),
        };

        this.handleFirst = this.handleFirst.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
    }

    handleFirst(date) {
        this.setState({ first: date });
    }

    handleSecond(date) {
        this.setState({ second: date });
    }

    render() {
        let { first, second } = this.state;
        let difference = Math.abs(Math.round((first - second) / (1000 * 60 * 60 * 24)));

        return (
            <>
                <Row className="mt-4">
                    <Col>
                        <DatePicker
                            className="form-control"
                            selected={ first }
                            onChange={ this.handleFirst }
                        />
                    </Col>

                    <Col>
                        <DatePicker
                            className="form-control"
                            selected={ second }
                            onChange={ this.handleSecond }
                        />
                    </Col>
                </Row>

                <Alert
                    className="mt-4"
                    variant="primary"
                >{ difference } days</Alert>
            </>
        );
    }
}

export default Times;
