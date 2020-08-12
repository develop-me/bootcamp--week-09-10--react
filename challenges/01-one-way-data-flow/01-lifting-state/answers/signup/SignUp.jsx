import React, { Component } from "react";
import Password from "./Password";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirm: "",
        };
    }

    handleChange(e, name) {
        let change = {};
        change[name] = e.currentTarget.value;
        this.setState(change);
    }

    render() {
        let { minimumLength } = this.props;
        let { confirm, password } = this.state;
        const valid = confirm === password && confirm.length > minimumLength && password.length > minimumLength;

        return (
            <form className={ valid ? "" : "has-error" }>
                <Password
                    label="Password"
                    value={ password }
                    handleChange={ (e) => this.handleChange(e, "password") }
                />
                <Password
                    label="Confirm Password"
                    value={ confirm }
                    handleChange={ (e) => this.handleChange(e, "confirm") }
                />
            </form>
        );
    }
}

export default SignUp;
