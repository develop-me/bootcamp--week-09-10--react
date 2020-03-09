import React, { useState } from "react";

const Button = ({ handleUpdate }) => {
    // standard counter logic
    const [counter, setCounter] = useState(0);

    const updateCounter = () => {
        let value = counter + 1;
        setCounter(value);

        // call the handle update method prop
        // and pass it the value
        handleUpdate(value);
    };

    return <button className="btn btn-primary" onClick={ updateCounter }>Click!</button>;
}

export default Button;
