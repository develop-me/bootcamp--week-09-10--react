import React, { Component } from "react";

class TempConverter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            celsius: 0,
            fahrenheit: 32,
        };

        this.handleChangeCelsius = this.handleChangeCelsius.bind(this);
        this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
    }

    handleChangeCelsius(e) {
        let value = +e.currentTarget.value;
        this.setState({
            celsius: value,
            fahrenheit: (value * 1.8 + 32).toFixed(2),
        });
    }

    handleChangeFahrenheit(e) {
        let value = +e.currentTarget.value;
        this.setState({
            fahrenheit: value,
            celsius: ((value - 32) / 1.8).toFixed(2),
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="form-group mt-4">
                    <label>Celsius</label>
                    <input type="number" className="form-control" onChange={ this.handleChangeCelsius } value={ this.state.celsius } />
                </div>
                <div className="form-group">
                    <label>Fahrenheit</label>
                    <input type="number" className="form-control" onChange={ this.handleChangeFahrenheit } value={ this.state.fahrenheit } />
                </div>
            </React.Fragment>
        );
    }
}

export default TempConverter;
