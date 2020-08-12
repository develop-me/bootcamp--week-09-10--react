import React, { Component } from "react";

class CountBy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { clicks } = this.state;
        let { step } = this.props;
        this.setState({ clicks: clicks + step });
    }

    render() {
        let { clicks } = this.state;
        return <p onClick={ this.handleClick }>{ clicks }</p>;
    }
}

export default CountBy;
