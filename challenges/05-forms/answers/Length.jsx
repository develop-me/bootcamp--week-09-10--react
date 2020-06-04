import React, { Component } from "react";

class Length extends Component {
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

    render() {
        let { value } = this.state;

        return (
            <div className="form-group mt-4">
                <input className="form-control" onChange={ this.handleChange } value={ value } />
                <p className="help-block">Length: { value.length }</p>
            </div>
        );
    }
}

export default Length;
