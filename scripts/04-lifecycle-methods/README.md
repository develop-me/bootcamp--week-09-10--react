# Week 1: Day 2 – Afternoon

## Lifecycle Methods

- For class based components, methods that React calls for us
- `constructor`:
    - setting up initial state
    - binding methods
    - nothing else - don't want to delay `render`
- `render`:
    - should just return JSX
    - no side-effects
- `componentDidMount`:
    - runs straight after first `render`
    - for side-effects when component first loads
    - e.g. `setTimeout`
    - e.g. adding `window` event handler
- `componentWillUnmount`:
    - just before the component is removed
    - e.g. clearing `setTimeout`
    - e.g. removing `window` event listener
- `componentDidUpdate`:
    - gets called every time component updates
    - state *or* props changing
    - don't use `this.setState` outside of a conditional or you'll get an infinite loop
    - e.g. to autosave a change to any field on a form
    - can be used if state has been derived from props to update state
