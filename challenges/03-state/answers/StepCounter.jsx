import React, { Component } from "react";

class StepCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleClickIncrement = this.handleClickIncrement.bind(this);
        this.handleClickDecrement = this.handleClickDecrement.bind(this);
    }

    handleClickDecrement() {
        let count = this.state.count - this.props.step;

        if (count >= 0) {
            this.setState({ count: count });
        }
    }

    handleClickIncrement() {
        let count = this.state.count + this.props.step;

        if (count <= this.props.max) {
            this.setState({ count: count });
        }
    }

    render() {
        return (
            <React.Fragment>
                <p className="card card-body">{ this.state.count }</p>
                <button onClick={ this.handleClickDecrement } className="btn btn-primary">-</button>
                <button onClick={ this.handleClickIncrement } className="btn btn-primary">+</button>
            </React.Fragment>
        );
    }
}

StepCounter.defaultProps = {
    max: 100,
    step: 5,
};

export default StepCounter;
