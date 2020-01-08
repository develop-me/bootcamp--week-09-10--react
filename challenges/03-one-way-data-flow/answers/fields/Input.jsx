import React from "react";

const Input = ({ valid, label, handleChange, value }) => (
    <div className="form-group">
        <label>{ label }</label>
        <input
            className={ "form-control" + (valid ? "" : " is-invalid")}
            value={ value }
            onChange={ handleChange }
        />
        { valid ? null : <p className="invalid-feedback">{ label } is required</p> }
    </div>
);

export default Input;
