import React, { Component } from "react";

class Colours extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { colours } = this.props;

        this.setState({
            index: (this.state.index + 1) % colours.length,
        });
    }

    render() {
        let { index } = this.state;
        let { colours } = this.props;

        let colour = colours[index];

        return (
            <div onClick={ this.handleClick } style={{
                width: "200px",
                height: "200px",
                background: colour,
            }} />
        );
    }
}

export default Colours;
