import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
  // ...etc.

  render() {
    return (
      <>
        { /* when this button is clicked, set selected to 1 */ }
        <Button
          name="First"
          selected={ this.state.selected === 1 }
          handleClick={ () => this.setState({ selected: 1 }) }
        />

        { /* when this button is clicked, set selected to 2 */ }
        <Button
          name="Second"
          selected={ this.state.selected === 2 }
          handleClick={ () => this.setState({ selected: 2 }) }
        />
      </>
    );
  }
}

export default Buttons;
