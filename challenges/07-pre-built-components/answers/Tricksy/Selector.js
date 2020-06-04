import React, { Component } from "react";

import { Alert } from 'react-bootstrap';
import Select from 'react-select'

class Selector extends Component {
    constructor(props) {
        super(props);

        this.animals = props.animals.map(animal => ({
            value: value.toLowerCase(),
            label: animal
        }));

        this.state = {
            selected: this.animals[0],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({ selected: value });
    }

    render() {
        let { selected } = this.state;

        return (
            <>
                <Select
                    className="mt-4"
                    options={ this.animals }
                    value={ selected }
                    onChange={ this.handleChange }
                />

                <Alert className="mt-4" variant="primary">
                    <strong>Favourite Animal:</strong> { selected.label }
                </Alert>
            </>
        );
    }
};

export default Selector;
