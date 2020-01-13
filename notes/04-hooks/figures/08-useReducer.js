import React, { useReducer } from "react";

// the intial state
const initial = {
  player1: 0,
  player2: 0,
};

// ...the reducer function from above

// the Scorer component
const Scorer = () => {
  // useReducer returns the *current* state
  // and a dispatch function
  const [ state, dispatch ] = useReducer(reducer, initial);
  const { player1, player2 } = state;

  return (
    <>
      <p
        onClick={ () => dispatch({ type: "player1Scores" }) }
      >
        Player 1: { player1 }
      </p>

      <p
        onClick={ () => dispatch({ type: "player2Scores" }) }
      >
        Player 2: { player2 }
      </p>
    </>
  );
};

export default Scorer;
