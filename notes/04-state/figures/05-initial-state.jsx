import React, { Component } from "react";

class Header extends Component {
  // add a constructor method
  // it gets passes props as its first argument
  constructor(props) {
    // make sure you always add this, it makes Component work
    super(props);

    // setup our state
    // just a plain old JavaScript object
    this.state = {
      counter: 0,
    };
  }

  // ...etc.
}

export default Header;
