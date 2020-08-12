import React, { Component } from "react";

class Die extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 1,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { sides } = this.props;

        this.setState({
            value: Math.floor(Math.random() * sides) + 1,
        });
    }

    render() {
        let { value } = this.state;

        return (
            <div onClick={ this.handleClick } style={{
                border: "1px solid #000",
                borderRadius: "5px",
                fontSize: "32px",
                height: "44px",
                textAlign: "center",
                width: "44px",
            }}>{ value }</div>
        );
    }
}

Die.defaultProps = {
    sides: 6,
};

export default Die;
