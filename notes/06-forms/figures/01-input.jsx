import React, { Component } from "react";

// a fairly useless input component
// the user can change the value of the input
// but no way of getting/setting the value
class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label>{ this.props.label }</label>
        <input className="form-control" name={ this.props.name } />
      </div>
    );
  }
}

export default Input;
