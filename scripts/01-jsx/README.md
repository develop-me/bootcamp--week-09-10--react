# Day 1: Morning

## JS Recap [10 mins]

- Demonstrate with Node
- Audience participation
- Types of things
- Numbers
	1. represents both integer and floating point numbers
	2. many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on
	3. so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN
	4. Infinity: reference directly, or division by zero
	5. NaN: represents a computational error. It is a result of an incorrect or an undefined mathematical operation.
	6. NaN is sticky: any further operations on NaN return NaN 
- Strings
 	1. must be surrounded by quotes - ', " or `
	2. can be concatentated or interpolated
- Booleans
	1. only 2 values: true/false
	2. commonly used to store yes/no values
	3. can come as a result of comparisons
- Arrays
	1. used to store multiple values in a single variable
	2. access the values by referring to an index number
	3. variables of different types
- Objects
	1. an unordered collection of related data
	2. key:value pairs, called properties
	3. The property names can be strings or numbers
- Functions
	1. Call it
   	2. Takes arguments
    	3. Returns a value
- Array notation
    - Map, filter, reduce
- Object notation
    - Destructuring
- Classes


## React [5 mins]

- What is React
- Makes DOM nice
- For building UIs
- Not a framework
- Also be using Axios, Redux, ReactRouter
- Can't built a full app until we learn Redux, so for now just building stand-alone components
- Overkill to use for basic websites

### Scaffolding [10 mins]

- **Tell them not to follow along**
- `npm init react-app project-name`
- Show app running
- Using Babel, Webpack, ESLint
- Show that changes update things
- Show that errors
- Quickly look at directory structure

### JSX [30-45 mins]

- **Emphasise that we're still just doing JavaScript**: JSX is on top of it
- Components: one per UI element
- Components can have sub-components
- Top level component: `App` in this setup (show `index.js`)
- Change App to `<h1>Hello, world</h1>` with stateless component

   ```js
    let App = () => {
        return <h1>Hello, world</h1>;
    };
    ```
- What is a templating language?
    - way to generate one sort of code from another
- JSX specifics: camel-case attributes, `className`, moustaches
- Under-the-hood: just creating classes and using DOM - `React.createElement("h1", {}, "Hello, world")`
- Use bootstrap: add to `index.html`
- CSS-in-JS
- Sub-components: create a `<Header>`, use in `App`
- Quickly mention `import` & `export`: modern JS (not React specific)
- Show console messages
- Content component: see `Content.js`
- Pull out JS: `const formatted = valuation.toLocaleString( "en-GB", { style: "currency", currency: "GBP" });`
- Use `<Content>` in `App`: need to use `<>`/`</>`
- Split out `Funding`, then use in `Header`
- `Pagination` for `.map()`: see `Pagination.js`
- `key` attribute
