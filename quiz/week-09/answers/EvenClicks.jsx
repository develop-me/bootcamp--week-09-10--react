import React, { Component } from "react";

class EvenClicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { clicks } = this.state;
        this.setState({ clicks: clicks + 1 });
    }

    render() {
        let { clicks } = this.state;
        return <p onClick={ this.handleClick }>{ clicks % 2 === 0 ? "Even" : "Odd" }</p>;
    }
}

export default EvenClicks;
