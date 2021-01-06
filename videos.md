# Video Chunking

## JS Recap

- Numbers, strings, booleans
- Arrays
- Objects
- Functions
- Classes


## React

- What is React
- Library vs Framework
- Ad hoc framework: axios, ReactRouter, Redux
- Web App vs Website


## Create React App

- Creating new app
- Running new app: change file, updates in browser
- Directory Structure
- Under the hood: Babel, ESLint, Webpack, etc.


## JSX

- Templating Languages
- Basic JSX: HTML in JS
- Components: for repeated bits of UI
- `import` & `export`
- Sub-Components
- Moustaches: variables in JSX
- Mapping over arrays
- Ternary operator: evaluating to `null`
    - Expression: any unit of code that can be evaluated to a value
    - Statement: an instruction to perform a specific action
- React Dev Tools
- CSS: `className`, `style`


## Props

- Reusability: `<Figure>` component
    - Reuse same HTML, but with different content
    - Show multiple `Figures`
- Destructuring props
- One-way data flow
- Different prop types: string, number, boolean, array, object literal, function
- `children` prop
- `defaultProps`


## Events

- Adding event handlers


## Class Components

- `class` based components
- Stateless to `class` transformation
- Binding `this`


## State

- What is "State"?
- Using `this.state`
    - POJO
    - `constructor()`
    - Use in JSX
    - React DevTools
- How to use state
    - Keeping track of values that change
    - Keeping values simple
- Using `this.setState()`
    - Causes a re-render
    - So state should only be used for things that cause a visual change
    - Deferred execution
- Accidentally changing `this.state`
- Summary


## Lifecycle Methods

- Concept of lifecycle methods
- Mounting
- Updating
- Unmounting
- Positioning in class


## Forms

- Controlled components: concept
- Controlled components: example
- Summary:
    - For every form control
    - Need `onChange`
    - Need to set `value`
    - Need to `setState()` with `e.currentTarget.value`


## ReactRouter

- ReactRouter/routing overview
- Setup
- A basic `<Route>` (with `BrowserRouter`)
- `exact`
- URL parameters
- `<Link>`s
- `<Switch>` and 404s
- Programmatic Navigation
- `HashRouter`
- Summary


## Pre-Built Components

- One Way Data Flow FTW
- Pre-Built Components
- React Bootstrap
- React Datepicker


## Deployment

- Deploying with GitHub Pages
- Using HashRouter


## Lifting State

- The Limitations of One Way Data Flow
- Buttons
- One big component -> split up


## Passing Data Up

- Passing Data Up


## AJAX

- AJAX
- Axios
- Using axios
- Asynchronous programming
- Promises
- Out of order
- Errors with Promises
- The Network tab
- AJAX in components


## Hooks

- Hooks: concept
- Destructuring Array Assignment
- `useState` hook example
- With multiple values in state
- Tuples
- Reducer concept
- `useReducer`
- `useEffect`
- Custom hooks
- How hooks work
