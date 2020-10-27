import { useState } from "react";

const Square = ({ colour }) => {
    const [ green, setGreen ] = useState(true);
    const change = () => setGreen(!green);

    const background = green ? "green" : colour;

    return (
        <div
            onClick={ change }
            style={{
                height: 200,
                width: 200,
                background: background,
            }}
        />
    );
};

Square.defaultProps = {
    colour: "hotpink",
};

export default Square;
