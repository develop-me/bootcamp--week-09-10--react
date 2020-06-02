import React from "react";

const Input = ({ name, id, handleChange, value }) => (
    <div className="form-group">
        <label htmlFor={ id }>{ name }</label>
        <input onChange={ handleChange } value={ value } id={ id } className="form-control" />
    </div>
);

export default Input;
