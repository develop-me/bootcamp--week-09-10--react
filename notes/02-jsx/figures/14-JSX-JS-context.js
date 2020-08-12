import React from "react";

// JS land
// plain old javascript stuff out here

const Thing = () => (
  <div> { /* in JSX mode now, so need moustaches to do JS */ }

    { /* basic JS expression */ }
    <p>{ 12 * 12 }</p>

    { /* more complex expression */ }
    { /* all in JS, so no extra moustaches needed */ }
    <p>{ [1, 2, 3, 4].map(n => n * n).join(", ") }</p>

    { /* really complex expression */ }
    { /* second map goes into JSX mode when we open <span> */ }
    { /* so need moustaches to get back into JS-in-JSX mode */ }
    <p>
      { [1, 2, 3, 4].map(n => n * n).map(n => <span>{ n }</span>) }
    </p>

    { /* to do a comment in JSX, open a moustache to */ }
    { /* get into JS-in-JSX mode, then use comments */ }
  </div>
);

export default Thing;
