import React, { useReducer } from "react";

// the intial state
const initial = {
  player1: 0,
  player2: 0,
};


// reducer functions
const player1Scores = state => {
  return {
    ...state,
    player1: state.player1 + 1,
  };
};

const player2Scores = state => {
  return {
    ...state,
    player2: state.player2 + 1,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "player1Scores": return player1Scores(state);
    case "player2Scores": return player2Scores(state);
    default: return state;
  }
};


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
