import React from "react";

// import Card from React Bootstrap
import { Card } from "react-bootstrap";

// want it to use a <figure> element, so use 'as' prop
const Figure = props => (
  <Card as="figure">
    { /* DOM props (alt, src) get passed through */ }
    <Card.Img
      variant="top"
      alt={ props.caption }
      src={ props.src }
    />
    <Card.Body>
      { /* want it to use a <figcaption> element */ }
      <Card.Text as="figcaption">
        { props.caption }
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Figure;
