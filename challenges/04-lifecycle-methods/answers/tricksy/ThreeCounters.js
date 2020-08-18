import React, { Component } from 'react';

class ThreeCounters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: 1,
            value2: 10,
            value3: 50,
        };

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);
        this.handle3 = this.handle3.bind(this);
    }

    componentDidMount() {
        let stored = window.localStorage.getItem("three-timers", this.state);

        if (stored) {
            this.setState(JSON.parse(stored));
        }
    }

    componentDidUpdate() {
        window.localStorage.setItem("three-timers", JSON.stringify(this.state));
    }

    handle1() {
        this.setState({ value1: this.state.value1 + 1 });
    }

    handle2() {
        this.setState({ value2: this.state.value2 + 1 });
    }

    handle3() {
        this.setState({ value3: this.state.value3 + 1 });
    }

    render() {
        const { value1, value2, value3 } = this.state;

        return (
            <div className="jumbotron">
                <p>
                    <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
                    <span className="alert alert-danger mr-2 ml-2">{ value1 }</span>
                </p>
                <p>
                    <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
                    <span className="alert alert-success mr-2 ml-2">{ value2 }</span>
                </p>
                <p>
                    <button onClick={ this.handle3 } className="btn btn-lg btn-primary">+</button>
                    <span className="alert alert-primary mr-2 ml-2">{ value3 }</span>
                </p>
            </div>
        );
    }
}

export default ThreeCounters;
