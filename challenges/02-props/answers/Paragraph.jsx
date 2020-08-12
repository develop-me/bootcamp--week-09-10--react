import React from "react";

const Paragraph = ({ children }) => (
    <p>{ children }</p>
);

Paragraph.defaultProps = {
    children: "Hello, world",
};

export default Paragraph;
