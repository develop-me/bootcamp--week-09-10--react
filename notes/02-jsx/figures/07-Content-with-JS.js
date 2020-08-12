import React from "react";

// just some standard JS
const valuation = 5e6;

// use the JS number toLocaleString() method to format
const formatted = valuation.toLocaleString(
  "en-GB", { style: "currency", currency: "GBP" }
);

const Content = () => (
  <main>
    <p className="lead">This app is the best</p>

    <img className="img-thumbnail" alt="A cat" src="https://goo.gl/tRdW93" />

    <p className="alert alert-success">
      { /* we can use the variable from above */ }
      { /* by wrapping it in curly braces */ }
      If you'd like to fund us for { formatted }+, please get in touch
    </p>
  </main>
);

export default Content;
