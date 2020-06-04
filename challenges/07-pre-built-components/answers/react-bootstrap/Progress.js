import React, { Component } from "react";

import { Button, ProgressBar } from "react-bootstrap";

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { value } = this.state;

        this.setState({
            value: value < 100 ? value + 10 : value,
        });
    }

    render() {
        return (
            <>
                <ProgressBar
                    className="mt-4 mb-4"
                    now={ this.state.value }
                />
                <Button
                    disabled={ this.state.value === 100 }
                    onClick={ this.handleClick }
                >More!</Button>
            </>
        );
    }
}

export default Progress;
