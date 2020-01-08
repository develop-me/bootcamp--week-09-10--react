import React, { Component } from "react";
import Input from "./Input";

class Fields extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: props.fields.map(() => ""),
            submitted: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e, index) {
        let values = this.state.values.slice();
        values[index] = e.currentTarget.value;
        this.setState({ values });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
    }

    render() {
        const { fields } = this.props;
        const { values, submitted } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                { fields.map((label, index) => (
                    <Input
                        key={ index }
                        valid={ !submitted || values[index] !== "" }
                        label={ label }
                        value={ values[index] }
                        handleChange={ e => this.handleChange(e, index) }
                    />
                )) }
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Fields;
