import React from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({ square }) => (
    <React.Fragment>
        <Header>Good Morning, Good Morning</Header>
        <Paragraph>I am the egg man, They are the egg men, I am the walrus, Goo goo g'joob</Paragraph>
        { square ? (<Square colour="#0f0" />) : null }
        <People names={ ["John", "Paul", "George", "Ringo"] } />
    </React.Fragment>
);

Stuff.defaultProps = {
    square: true,
};

export default Stuff;
