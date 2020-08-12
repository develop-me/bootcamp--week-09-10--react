import React from "react";

const valuation = 5e6;

// use the JS number toLocaleString() method to format
const formatted = valuation.toLocaleString(
  "en-GB",
  { style: "currency", currency: "GBP" }
);

const Funding = () => (
  <p className="alert alert-success">
    If you'd like to fund us for { formatted }+, please get in touch
  </p>
);

export default Funding;
