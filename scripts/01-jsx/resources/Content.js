import React from "react";

// a component can only have one top-level element
// so we wrap everything in a <main> tag

// const formatted = valuation.toLocaleString('en-GB', {style: 'currency', currency: 'NOK'})
const Content = () => (
    <main>
        <p className="lead">This app is the best</p>
        <img
            className="img-thumbnail"
            alt="A cat"
            src="https://media.tenor.com/images/c50ca435dffdb837914e7cb32c1e7edf/tenor.gif"
        />
        <p className="alert alert-success">
            If you'd like to fund us for £500k+, please get in touch
        </p>
    </main>
);

export default Content;
