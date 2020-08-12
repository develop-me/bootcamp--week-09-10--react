// reducer functions
const player1Scores = state => {
  return {
    ...state,
    player1: state.player1 + 1,
  };
};

// ...other functions

const reducer = (state, action) => {
  switch (action.type) {
    // call the function, passing state
    case "PLAYER_1_SCORES": return player1Scores(state);

    // ...other cases
  }
};
