const reducer = (state, action) => {
  switch (action.type) {
    case "player1Steals": return {
      ...state,

      // do something with the amount property
      player1: state.player1 + action.amount,
      player2: state.player2 - action.amount,
    };

    // ...other switch cases
  }
};

// run the reducer, passing in state and action
let action = { type: "player1Steals", amount: 20 };
let newState = reducer(initial, action);
console.log(newState); // { player1: 20, player2: -20 }
