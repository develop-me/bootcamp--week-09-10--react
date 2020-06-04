import React, { Component } from "react";

// import date picker CSS
import "react-datepicker/dist/react-datepicker.css";

// import date picker component
import DatePicker from "react-datepicker";

class Dates extends Component {
  constructor(props) {
    super(props);

    // DatePicker uses Date objects
    // set the initial date in state to now
    this.state = {
      date: new Date(),
    };

    // bind handleDate method
    this.handleDate = this.handleDate.bind(this);
  }

  // the date picker onChange function gets passed
  // the selected date by the date picker
  handleDate(date) {
    // update the state
    this.setState({ date });
  }

  render() {
    // get the current date
    let { date } = this.state;

    // set the selected date to the date in state
    // set the onChange prop to the handleDate method
    return (
      <DatePicker
        selected={ date }
        onChange={ this.handleDate }
      />
    );
  }
}

export default Buttons;
