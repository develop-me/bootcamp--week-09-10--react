import React, { Component } from "react";

import { Form } from "react-bootstrap";

class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.currentTarget.value;
        this.setState({ value: value });
    }

    // calculate colour from length
    // doesn't need to be a separate method
    // but nice to keep methods simple
    calculateColor(length) {
        if (length < 9) {
            return "red"; // if less than 9 then red
        } else if (length < 16) {
            return "orange"; // if less than 16 then orange
        }

        return "green"; // otherwise green
    }

    calculateBackground() {
        let length = this.state.value.length;

        // no styling (empty object) if empty
        // otherwise work out colour with length
        return length === 0 ? {} : {
            background: this.calculateColor(length)
        };
    }

    render() {
        let { value } = this.state;
        let style = this.calculateBackground();

        return (
            <Form className="mt-4">
                <Form.Control
                    style={ style }
                    className="form-control"
                    onChange={ this.handleChange }
                    value={ value }
                />
            </Form>
        );
    }
}

export default PasswordStrength;
