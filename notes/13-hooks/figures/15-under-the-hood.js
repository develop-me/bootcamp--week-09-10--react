// an array storing the states for all components
let state = [];

// keep track of the current component being rendered
// updated when each component is rendered
let currentComponent = 0;
let currentUseState = 0;

// use state uses the state and currentComponent
let useState = (initial) => {
    // store the current component
    // need for setValue further down
    let componentIndex = currentComponent;

    // if this component has rendered yet
    // add an empty array to keep track of its states
    if (state[componentIndex] === undefined) {
        state[componentIndex] = [];
    }

    // keep track of the current useState for this component
    // some components have more than one call to useState
    let useStateIndex = currentUseState;

    // increment for the next run
    currentUseState += 1;

    // set the initial value if it doesn't exist already
    if (state[componentIndex][useStateIndex] === undefined) {
        state[componentIndex][useStateIndex] = initial;
    }

    // create a setValue function
    // updates the current component's state
    // with the given value
    let setValue = (value) => {
        state[componentIndex][useStateIndex] = value;
    };

    // return the current value
    // and the setValue function
    return [state[componentIndex][useStateIndex], setValue];
};

// some super simple "components"
let components = [
    () => {
        let [name, setName] = useState("Bob");
        return <p>{ name }</p>;
    },
    () => {
        let [count, setCount] = useState(1);
        return <p>{ count }</p>;
    }
];

// get the JSX for each component
// then do something with it
components.forEach((component, i) => {
    currentComponent = i; // keep track of current component
    currentUseState = 0; // reset currentUseState
    let rendered = component();

    // ...DOM stuff
});
