import React, { Component } from "react";

class Transform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.currentTarget.value,
        });
    }

    render() {
        let { value } = this.state;
        let { transform } = this.props;

        return (
            <React.Fragment>
                <input className="form-control mt-4" onChange={ this.handleChange } value={ value } />
                <p className="card card-body mt-4">{ transform(value) }</p>
            </React.Fragment>
        );
    }
}

export default Transform;
