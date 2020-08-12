// the reducer
const reducer = state => {
  return state;
};

// our state
const initialState = {
  player1: 0,
  player2: 0,
};

// run the reducer, passing in state
let newState = reducer(initialState);
console.log(newState); // same as initialState
