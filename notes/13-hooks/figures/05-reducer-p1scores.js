const reducer = (state, action) => {
  switch (action.type) {
    // if the type property is "PLAYER_1_SCORES"
    // add one to the player1 property of state
    case "PLAYER_1_SCORES": return {
      ...state,
      player1: state.player1 + 1,
    };
    default: return state;
  }
};

// run the reducer, passing in state and action
let action = { type: "PLAYER_1_SCORES" };
let newState = reducer(initialState, action);
console.log(newState); // { player1: 1, player2: 0 }
