import React, { useState } from "react";

const Die  = ({ sides }) => {
    const [ value, setValue ] = useState(1);
    const change = () => setValue(Math.floor(Math.random() * sides) + 1);

    return (
        <div onClick={ change } style={{
            border: "1px solid #000",
            borderRadius: "5px",
            fontSize: "32px",
            height: "44px",
            textAlign: "center",
            width: "44px",
        }}>{ value }</div>
    );
}

Die.defaultProps = {
    sides: 6,
};

export default Die;
