import React, { Component } from "react";

class Timer extends Component {
    constructor(props) {
        super(props);

        // keep track of current value
        this.state = {
            value: props.start,
        };

        // doesn't need to be stored in state
        // nothing to do with render
        this.intervalID = null;
    }

    componentDidMount() {
        // need to keep track of the interval ID so we
        // can kill it if necessary
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        // clear the interval when the component is unmounted
        clearInterval(this.intervalID);
    }

    tick() {
        const { value } = this.state;

        if (value <= 0) {
            // clear the interval when we get to 0
            clearInterval(this.intervalID);
        } else {
            // decrement the value
            this.setState({ value: value - 1 });
        }
    }

    render() {
        const { value } = this.state;

        return (
            <p className="well">{ value }</p>
        );
    }
}

export default Timer;
