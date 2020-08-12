import React, { Component } from "react";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

class DatePick extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log("Change");
    }

    render() {
        return (
            <DatePicker
                className="form-control"
            />
        );
    }
}

export default DatePick;
