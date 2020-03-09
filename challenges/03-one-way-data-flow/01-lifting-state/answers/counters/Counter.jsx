import React from "react";

const Counter = ({ highlighted, value, handlePlus, handleSubtract }) => (
    <div className={ "alert alert-" + (highlighted ? "danger" : "info") }>
        <p>{ value }</p>
        <button onClick={ handleSubtract } className="btn btn-primary">-</button>
        <button onClick={ handlePlus } className="btn btn-primary">+</button>
    </div>
);

export default Counter;
