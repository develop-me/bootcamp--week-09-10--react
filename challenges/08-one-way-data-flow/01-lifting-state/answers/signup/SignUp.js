import { Component } from "react";
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
        const valid = (confirm === password) && (password.length > minimumLength);

        return (
            <form>
                <Password
                    label="Password"
                    value={ password }
                    valid={ valid }
                    handleChange={ (e) => this.handleChange(e, "password") }
                />
                <Password
                    label="Confirm Password"
                    value={ confirm }
                    valid={ valid }
                    handleChange={ (e) => this.handleChange(e, "confirm") }
                />
            </form>
        );
    }
}

export default SignUp;
