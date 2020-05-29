import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    // keep track of whether the button is selected
    this.state = { selected: false };

    // bind the click even handler
    this.handleClick = this.handleClick.bind(this);
  }

  // when clicked
  handleClick() {
    // invert the value of selected
    this.setState({ selected: !this.state.selected });
  }

  render() {
    // destructure props
    let { name } = this.props;

    // destructure state
    let { selected } = this.state;

    // render the button
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
