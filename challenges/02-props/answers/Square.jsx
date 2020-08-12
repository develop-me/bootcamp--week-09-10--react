import React from "react";

const Square = ({ colour }) => (
    <div style={{
        background: colour,
        width: "200px",
        height: "200px",
    }} />
);

Square.defaultProps = {
    colour: "#f00",
};

export default Square;
