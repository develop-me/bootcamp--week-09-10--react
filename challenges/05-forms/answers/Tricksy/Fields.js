import React, { Component } from "react";

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
            <form className="mt-4" onSubmit={ this.handleSubmit }>
                { fields.map((label, index) => (
                    <div
                        className="form-group"
                        key={ index }
                    >
                        <label>{ label }</label>
                        <input
                            className={ "form-control" + (!submitted || values[index] !== "" ? "" : " is-invalid")}
                            value={ values[index] }
                            onChange={ e => this.handleChange(e, index) }
                        />
                        { !submitted || values[index] !== "" ? null : <p className="invalid-feedback">{ label } is required</p>}
                    </div>
                )) }
                <button className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Fields;
