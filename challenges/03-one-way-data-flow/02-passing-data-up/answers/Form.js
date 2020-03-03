import React, { useState } from "react";

const Form = ({ handleSubmit }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const updateName = e => {
        setName(e.currentTarget.value);
    };

    const updateEmail = e => {
        setEmail(e.currentTarget.value);
    };

    // when form submitted
    const formSubmitted = e => {
        // prevent default
        e.preventDefault();

        // pass all data up
        handleSubmit({ name: name, email: email });
    };

    return (
        <form onSubmit={ formSubmitted } className="container">
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" onChange={ updateName } value={ name } />
            </div>

            <div className="form-group">
                <label>E-mail</label>
                <input className="form-control" onChange={ updateEmail } value={ email } />
            </div>

            <button className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
