import React from "react";

const Password = ({ label, handleChange, value }) => (
    <div className="form-group">
        <label>{ label }</label>
        <input
            type="password"
            className="form-control"
            value={ value }
            onChange={ handleChange }
        />
    </div>
);

export default Password;
