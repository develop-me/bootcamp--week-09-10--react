import React, { Component } from "react";

class Header extends Component {
  // ...etc.

  handleClick() {
    // get current value of counter
    let current = this.state.counter;

    // set new value
    // pass in a POJO with values we want to update
    this.setState({ counter: current + 1 });
  }

  // ...etc.
}

export default Header;
