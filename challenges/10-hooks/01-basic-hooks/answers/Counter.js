import { useState } from "react";

const Counter = ({ max }) => {
    const [ count, setCount ] = useState(0);
    const decrement = () => setCount(count - (count > 0 ? 1 : 0));
    const increment = () => setCount(count + (count < max ? 1 : 0));

    return (
        <>
            <p className="card card-body">{ count }</p>
            <button onClick={ decrement } className="btn btn-primary">-</button>
            <button onClick={ increment } className="btn btn-primary">+</button>
        </>
    );
}

Counter.defaultProps = {
    max: 100,
};

export default Counter;
