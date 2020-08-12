import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { counter } = this.state;
        let value = counter + 1;

        this.setState({ counter: value });

        // call the handle update method prop
        // and pass it the value
        this.props.handleUpdate(value);
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={ this.handleClick }>Click!</button>
        );
    }
}

export default Button;
