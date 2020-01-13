const reducer = (state, action) => {
  switch (action.type) {
    // if the type property is "player1Scores"
    // add one to the player1 property of state
    case "player1Scores": return {
      ...state,
      player1: state.player1 + 1,
    };
    default: return state;
  }
};

// run the reducer, passing in state and action
let action = { type: "player1Scores" };
let newState = reducer(initial, action);
console.log(newState); // { player1: 1, player2: 0 }
