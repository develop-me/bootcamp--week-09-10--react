import React, { Component } from "react";

import { Form } from "react-bootstrap";

class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celsius: 0,
            fahrenheit: 32,
        };

        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
        this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
    }

    handleChangeCelsius(e) {
        let value = +e.currentTarget.value;

        this.setState({
            celsius: value,
            fahrenheit: (value * 1.8 + 32).toFixed(2),
        });
    }

    handleChangeFahrenheit(e) {
        let value = +e.currentTarget.value;

        this.setState({
            fahrenheit: value,
            celsius: ((value - 32) / 1.8).toFixed(2),
        });
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label>Celsius</Form.Label>
                    <Form.Control
                        type="number"
                        step="any"
                        className="form-control"
                        onChange={ this.handleChangeCelsius }
                        value={ this.state.celsius }
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label>Fahrenheit</Form.Label>
                    <Form.Control
                        type="number"
                        step="any"
                        className="form-control"
                        onChange={ this.handleChangeFahrenheit }
                        value={ this.state.fahrenheit }
                    />
                </Form.Group>
            </Form>
        );
    }
}

export default TempConverter;
