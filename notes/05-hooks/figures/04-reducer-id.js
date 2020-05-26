// the reducer
const reducer = state => {
  return state;
};

// our state
const initial = {
  player1: 0,
  player2: 0,
};

// run the reducer, passing in state
let newState = reducer(initial);
console.log(newState); // same as initial
