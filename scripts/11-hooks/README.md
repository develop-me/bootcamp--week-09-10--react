# Week 2: Days 3 & 4 – Hooks

## Day 3: Morning

- Hooks are a newer way of writing stateful components
- More functional style, without needing to use a `class`
- Can seem a bit magical

### Destructuring Array Assignment

- Show destructuring an object
- Now destructuring an array of numbers

### `useState`

- Look at a basic class component (`Counter.js`)
- Rewrite `Counter.js` using hooks
- **Hooks just adding onto stateless components: props work the same**
- Go through counter example
- Keeps track of a single value in state
- Give it initial value
- Gives us back current value and function to update value
    - Can call whatever we like, normally `x` and `setX`
- Multiple values: one `useState` per value
    - Example with `player1` and `player2` scores
    - `useReducer` is nicer for multiple values
- Briefly mention concept of tuples
    - Not part of JS
    - Joins two values together, don't have to be same type

**Challenges**: `challenges/04-hooks/01-basic-hooks/README.md`

---

## Day 3: Afternoon

### `useReducer`

- **Demonstate in a pure JS file to start with: unit testing style**
- Cover the concept of a reducer
    - Similar to array reduce
    - Pure function
    - Always returns a valid version of the state
    - Show one that just returns state
- Explain actions
    - Plain object
    - `type` property
- Add an action to update `player1` score
- Add an action to update `player2` score
- Demonstrate passing which player as part of action
- Pull reducer `case`s out into separate functions
    - Pass `state` and `action` (if needed)
- Show `useReducer`
- Show dispatching an action
- Destructure `state`

**Challenges**: `challenges/04-hooks/02-useReducer/README.md`

---

## Day 4

### `useEffect`

- For side-effecty code
- Similar to lifecycle methods
- Demonstrate updating the page title `document.title` every time counter changes
- Show dependents array for updating title example
- Demonstrate `componentDidMount` like behaviour with empty array (`StarWars.js`)
- Demonstrate `componentWillUnmount` like behaviour

### Custom Hooks

- `useEffect` needs access to state variables
- Create hook to pull out API fetching behaviour

**Challenges**: `challenges/04-hooks/03-advanced-hooks/README.md`
