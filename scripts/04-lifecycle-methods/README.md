# Week 1: Day 2 – Afternoon

## Lifecycle Methods

-   The React life cycle follows the common Birth, Growth, and Death flow: with methods associated to each phase
-   React calls and utilises these methods under the hood for us but for class based components we have access to these methods too
- We use these lifecycle methods to add functionality to other stages of the components life that we can't achieve with the constructor or the render method
-   There are other methods, check the docs
-   **Birth or Mounting**:
    -   Initialisation of our component
    -   Calling our constructor
    -   Configuring our props and state
    -   Mounting our component and its children into the DOM
    -   Pre-processing, data acquisition via API's
    -   Only occurs once
    -   `ReactDOM.render()`
        -   Here we pass in the root Element (aka our App component) and tell React where to mount our content
        -   With this call, React begins processing the passed Element(s) and generate instances of our React components
    -   `constructor`:
        -   Calls the parent constructor: allowing us to use `this` inside the contructor
        -   Passing props to the constructor: so we can access `this.props` inside our constructor
        -   Setting up our initial state object
        -   Binding methods
        -   Nothing else - don't want to delay `render`
        -   If you neither initialize state nor bind methods for your React component, there is no need to implement a constructor.
    -   `render`:
        -   Should just return JSX
        -   Should be a _pure method_ = no side effects.
            -   Shouldn't call `setState()`, query the Native UI or anything else that can mutate the existing state of the application
            -   If we do this kind of interaction in `render()`, then it will kickoff another, which triggers another... infinitely
        -   The one method that exists across multiple life cycle phases. It occurs here in Birth and it is where we spend a lot of time in Growth.
    -   `componentDidMount`:
        -   The last step in the Birth/Mount life cycle phase
        -   Runs straight after first `render`
        -   Only called one time
        -   For side-effects when component first loads: now have access to full UI stack (e.g.children/grandchildren components heights and widths)
        -   e.g. `setTimeout`
        -   e.g. adding `window` event handler
-   **Growth or Updating**:
    -   Component spends most of its time here
    -   Here we get data updates and react to user or system interactions
    -   Triggered in 3 ways: changing of props, changing of state (using `this.setState()`) or calling `forceUpdate()`
    -   `componentDidUpdate`:
        -   Gets called every time after thecomponent updates
        -   The `componentDidMount` of the Updating phase
        -   State _or_ props changing
        -   2 arguments are passed: `prevProps` and `prevState`: what the values **were**
        -   Don't use `this.setState` outside of a conditional or you'll get an infinite loop
            -   This conditional is normally a comparison of a `prev` with a `this`
        -   e.g. to autosave a change to any field on a form
        -   Can be used if state has been derived from props to update state
-   **Death or Unmounting**
    -   When our component is Unmounted from the Native UI stack
    -   Such as navigating to another page or not rendering the component due to some user interaction
    -   Methods here are typically to reverse any setup we did in either `componentWillMount()` or `componentDidMount()`
    - If we don't unmount a listener or timer it will continue to run as long as the page is not refreshed
        - Older browsers in particular will struggle with this
        - You could end up with conflicting events or events interacting with each other in unexpected ways
    - If we unmount a component (e.g closing a dropdown menu) which has an event listener which calls a method that updates state, the event listener will continue to run and when the method is next called we will get an error

        ```
        Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
        ```

    -   `componentWillUnmount`:
        -   Just before the component is removed
        -   To avoid memory leaks/increase performance and reduce error risk
        -   e.g. clearing `setTimeout`
        -   e.g. removing `window` event listener
    -   READ THIS: https://developmentarc.gitbooks.io/react-indepth/content/life_cycle/introduction.html
- Positioning: In order of lifecycle, BELOW the constructor, ABOVE methods we define and the render method
