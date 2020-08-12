import React, { Component } from "react";

class Button extends Component {
  // ...etc.

  render() {
    let { name, selected } = this.props;

    // using the selected prop rather than state
    return (
      <button
        className={ `btn btn-${selected ? "danger" : "primary"}` }
        onClick={ this.handleClick }
      >
        { name }
      </button>
    );
  }
}

export default Button;
