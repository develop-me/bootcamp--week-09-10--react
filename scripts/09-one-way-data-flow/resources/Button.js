import React, { Component } from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            toggled: !this.state.toggled,
        });
    }

    render() {
        let { name } = this.props;

        return (
            <button
                onClick={ this.handleClick }
                className={ `btn ${ this.state.toggled ? "btn-primary" : "btn-danger" }` }
            >
                { name }
            </button>
        );
    }
}

export default Button;
