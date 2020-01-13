const reducer = (state, action) => {
  switch (action.type) {
    case "player1Bonus": return {
      ...state,

      // do something with the bonus property
      player1: state.player1 + action.bonus,
      player2: state.player2 - action.bonus,
    };

    // ...other switch cases
  }
};

// run the reducer, passing in state and action
let action = { type: "player1Steals", amount: 20 };
let newState = reducer(initial, action);
console.log(newState); // { player1: 20, player2: -20 }
