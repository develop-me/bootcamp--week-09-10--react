const Password = ({ label, value, valid, handleChange }) => (
    <div className="form-group">
        <label>{ label }</label>
        <input
            type="password"
            className={ `form-control ${valid ? "is-valid" : "is-invalid"}` }
            value={ value }
            onChange={ handleChange }
        />
    </div>
);

export default Password;
