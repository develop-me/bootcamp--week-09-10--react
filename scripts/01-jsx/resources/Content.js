import React from "react";

// a component can only have one top-level element
// so we wrap everything in a <main> tag
const Content = () => (
    <main>
        <p className="lead">This app is the best</p>
        <img className="img-thumbnail" alt="A cat" src="https://goo.gl/tRdW93" />
        <p className="alert alert-success">
            If you'd like to fund us for £500k+, please get in touch
        </p>
    </main>
);

export default Content;
