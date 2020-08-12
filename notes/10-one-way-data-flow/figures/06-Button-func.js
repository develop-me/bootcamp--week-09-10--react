import React from "react";

const Button = ({ name, selected, handleClick }) => (
  <button
    className={ `btn btn-${selected ? "danger" : "primary"}` }
    onClick={ handleClick }
  >
    { name }
  </button>
);

export default Button;
