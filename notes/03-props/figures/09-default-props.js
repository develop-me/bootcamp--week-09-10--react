import React from "react";

const Figure = ({ caption, src }) => (
  <figure className="card">
    { /* ...etc. */ }
  </figure>
);

// add default values for the caption and src props
// if the prop is not given these will be used
Figure.defaultProps = {
  caption: "A caption",
  src: "http://via.placeholder.com/350x350",
};

export default Figure;
