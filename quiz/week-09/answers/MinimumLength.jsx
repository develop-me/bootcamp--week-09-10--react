import React, { Component } from "react";

class MinimumLength extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.currentTarget.value });
    }

    render() {
        let { value } = this.state;
        let { length } = this.props;

        return (
            <div className="form-group">
                <input
                    className="form-control"
                    onChange={ this.handleChange }
                    value={ value }
                />
                { value.length < length ? <p className="help-block">Too short!</p> : null }
            </div>
        );
    }
}

export default MinimumLength;
