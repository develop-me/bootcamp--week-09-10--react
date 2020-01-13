// reducer functions
const player1Scores = state => {
  return {
    ...state,
    player1: state.player1 + 1,
  };
};

const player1Steals = (state, action) => {
  return {
    ...state,
    // do something with the bonus property
    player1: state.player1 + action.bonus,
    player2: state.player2 - action.bonus,
  };
};

// ...other functions

const reducer = (state, action) => {
  switch (action.type) {
    // call the function, passing state
    case "player1Scores": return player1Scores(state);
    // call the function, passing state and action
    case "player1Steals": return player1Steals(state, action);

    // ...other cases
  }
};
