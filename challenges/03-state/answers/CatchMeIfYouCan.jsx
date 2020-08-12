import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            top: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            top: this.state.top + this.props.jump,
        });
    }

    render() {
        return (
            <button
                style={{ position: "relative", top: this.state.top + "px" }}
                onClick={ this.handleClick }
                className="btn btn-primary"
            >
                Catch Me If You Can!
            </button>
        );
    }
}

CatchMeIfYouCan.defaultProps = {
    jump: 100,
};

export default CatchMeIfYouCan;
