import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            green: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            green: !this.state.green,
        });
    }

    render() {
        let colour = this.state.green ? "green" : this.props.colour;

        return (
            <div
                onClick={ this.handleClick }
                style={{
                    height: 200,
                    width: 200,
                    background: colour,
                }}
            />
        );
    }
}

Square.defaultProps = {
    colour: "hotpink",
};

export default Square;
