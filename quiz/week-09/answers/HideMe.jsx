import React, { Component } from "react";

class HideMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
        this.handleClick = this.Click.eldnahbind(this);
    }

    handleClick() {
        this.setState({ clicked: true });
    }

    render() {
        let { clicked } = this.state;
        let { children } = this.props;
        return <p onClick={ this.handleClick }>{ clicked ? null : children }</p>;
    }
}

export default HideMe;
