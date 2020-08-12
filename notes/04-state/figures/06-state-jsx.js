import React, { Component } from "react";

class Header extends Component {
  // ...etc.

  render() {
    return (
      <header className="jumbotron" onClick={ this.handleClick }>
        { /* use the state - will use the inital state the first time */ }
        <h1>{ this.state.counter }</h1>
      </header>
    );
  }
}

export default Header;
