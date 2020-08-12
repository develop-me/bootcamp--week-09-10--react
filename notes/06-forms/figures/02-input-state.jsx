import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    // add the value of the input to the state
    this.state = { input: "Test Value" };
  }

  render() {
    return (
      <div className="form-group">
        <label>{ this.props.label }</label>

        { /* use the value of the state */ }
        <input
          value={ this.state.input }
          name={ this.props.name }
          className="form-control"
        />
        <p className="form-text text-muted">
          Length: { this.state.input.length } characters
        </p>
      </div>
    );
  }
}

export default Input;
