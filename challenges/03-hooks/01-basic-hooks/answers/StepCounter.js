import React, { useState } from "react";

const StepCounter = ({ step, max }) => {
    const [ count, setCount ] = useState(0);
    const increment = () => setCount(count + (count < max ? step : 0));
    const decrement = () => setCount(count - (count > 0 ? step : 0));

    return (
        <>
            <p className="card card-body">{ count }</p>
            <button onClick={ decrement } className="btn btn-primary">-</button>
            <button onClick={ increment } className="btn btn-primary">+</button>
        </>
    );
};

StepCounter.defaultProps = {
    max: 100,
    step: 5,
};

export default StepCounter;
