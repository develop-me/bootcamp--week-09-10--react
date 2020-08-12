import React, { useState } from "react";

const RollCall = ({ names }) => {
    const [ index, setIndex ] = useState(0);
    const next = () => setIndex((index + 1) % names.length);

    return (
        <>
            <p className="card card-body">{ names[index] }</p>
            <button className="btn btn-primary" onClick={ next }>Next</button>
        </>
    );
};

export default RollCall;
