# Day 1: Morning
<em>(expect to finish between 11am and break)</em>

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
	2. can be concatentated (+)
	3. interpolated: template literals are string literals allowing embedded expressions (`${expression}`)
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
    - Map
	1. creates a new array with the results of calling a function for every array element
	2. function(currentValue, index = optional)
	3. multiplication
    - Filter
	1. creates an array filled with all array elements that pass a test (provided as a function)
	2. function(currentValue, index = optional)
	3. even numbers
    - Reduce
	1. reduces the array to a single value
	2. function(total, currentValue, currentIndex = optional), initialValue = optional
	3. sum
- Object notation
    1. Access value by dot notation
    2. Destructuring: unpack values from arrays, or properties from objects, into distinct variables.
    3. Can also use destructing for function parameters, which we'll do later today.
- Classes
	1. A JavaScript class is a type of function
	2. declared with the class keyword
	3. const y = class {}
	4. has inheritance - all instances of same class inherit the same properties/method defined in the constructor
	5. constructor = a blueprint/template for the class

	```js
	// Initializing a class
	class Cat {
	   // needed if you want to pass in arguments to the class
	   constructor(name, colour) {
   	  	this.name = name;
          	this.colour = colour;
		// can use the args you pass in, or set defaults
		this.legs = 4;
		this.isCute = true;
	   }

	   // has its own methods, inherited by other instances
	   miaow() {
		return 'miaow';
	   }
	};
	
	// creating a new instance of the class
	new Cat('Mr Tibbs', 'tabby');

	```
	6. classes are named with a capital letter
	7. React uses these a lot!


## React [5 mins]

- What is React: would anyone like to suggest?
- Leading frontend js library, made by FB
- Open source
- Actively maintained, improved and enhanced; have a nosy on website
- Makes DOM nice, removes all the clunky and awkward event listeners, document.gets etc. etc.
- It is just using plain old javascript under the hood, no witchcraft
- Using the DOM is the only way you can interact with a browser
- Used to generate User Interfaces for html in a web browser
- Not a framework: what's the difference?
- Framework: entire system designed to try and do everything for you e.g. angular, laravel - designed to build user interfaces and do all the other things involved in an app aka talk to APIS deal with data, routing when the url changes etc.
Frameworks good for large companies as puts a constraint on the devs
- Library: designed to do one thing NOT do everything for you
- Combining with other libraries and tools: Axios, Redux, ReactRouter
	- axios: making api requests with js
	- API? Application programming interface - way of talking to teh backend where the data normally lies
	- Redux: data management library
	- React Router: url management, deals with page navigation
- Industry combo, but alternatives for ALL
- Concepts are all transferable, so even if you don't end up using these you'll be so much quicker to pick them up and recognise the patterns
- Can't built a full app until we learn Redux, so for now just building stand-alone components
- Overkill to use for basic websites: simple enquiry page with a single form, brochure/magazine style website does not need react, something with many highly interactive components is a better use case. e.g. Trello, facebook, deliveroo, tinder!
- its largely single screen and not massively about navigating from one place to another, not a strong concept in react
- bugs in react tend to break everything - has downsides ofc like everything, lots more data and js to import

### Scaffolding [10 mins]

- **Tell them not to follow along**
- `npm init react-app project-name`
- stress lower case and hyphens, make sure name isn't name of another library aka react
- yarn and npm are just package managers for js
- They use the same repositories
- If you're using yarn your messages will just look slightly different
- This command does everything for you: was made because react was very hard to set up and is so widely used is an npm feature:
	- makes directory
	- makes package.json which holds the packages we need to run react
	- runs npm install and goes off to get those packages from internet
	- it'll cache for future times, can take a while
	- node_modules folder you can look at later is HUGE
- Using Babel: compiler
	- converts ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers
	- package.json: set confines for how much into the past to compile your code to both in dev and prod environments
	- 0.2% means it would work for 98.8% of users
	- browsers that are not dead
	- opera mini ignored cos doesnt even use js 
	- dev standards can be lower so machine doesnt have to do as much work whilst youre coding
- Webpack: module bundling system built on top of Node. js.
	-  Handles combination and minification of JavaScript and CSS files, and other assets such as image files through the use of plugins.
- ESLint: a linter looks for anomallies in code, both errors and inconsistencies which can lead to bugs 
- Show working
- Show that changes update things
	- The webserver create react app sets up watches for file changes and then automatically refreshes the browser for you
	-  looks for code errors and alerts you to those too, as well as weird things like unused vars
	- all sitting in the console for you
- Show that errors: console, terminal, browser
	- yellow: non-breaking, inconsistencies and unused vars
	- red: breaking
- Quickly look at directory structure:
	- package.json = which packages to install
	- node_modules = where those packages lives
	- public -> index.html = the html template, where the browser points
	- src -> App.js = the root react component
	- src -> index.js = entry point for the JS


### JSX [30-45 mins]

- GO TO APP.JS
- **Emphasise that we're still just doing JavaScript**: JSX is on top of it, whats in the return
- Some things do look different though
- imports we haven't used yet 
- function App() - capital letter looks a bit weird but thats just the old way of writing it
- Look what its returning - its html. But not quite html - this is jsx
- JSX = syntax extension for JS, a templating language
- What is a templating language?
	- Allows the defining of placeholders within a design structure that are later on replaced with dynamic data
	- Support iteration and conditions which are often necessary for designing a web page
	- Allows us to have the interactivy, and flexibility of what's rendered in the browser based on what the user does
- JSX specifics:
	- camelCase attributes
	- `className`: class is reserved word
	- Moustaches: dictate when we are using jsx or js

- Structure
	- Components: one per UI element
	- Components can have sub-components
	- Top level component: `App` in this setup (show `index.js`)
	- App will import all other components, and then index.js just has to import App.js

- Change App to `<h1>Hello, world</h1>` with stateless component

   ```js
    let App = () => {
        return <h1>Hello, world</h1>;
    };
    ```

- Under-the-hood: just creating classes and using DOM

	```js
	// all the same 
	<h1>Hello, world</h1>

	// same as
	React.createElement("h1", {}, "Hello, world")
	
	// same as
	var newDiv = document.createElement("h1"); 
  	newDiv.innerHTML = "Hello, world";

  	let div = document.getElementById('root');
  	div.appendChild(newDiv);
	```
- Use bootstrap: add to `index.html`
- CSS-in-JS: several options
	- import a css file straight in, like App.css
	- use inline styling, although syntax is different
	- use a className from your imported bootstrap: `alert alert-primary`
	- other libraries you can use built specially for react/component style libraries
- Sub-components: create a `<Header>`, use in `App`
- Quickly mention `import` & `export`: modern JS (not React specific)
	- export statement used to export functions, objects, or primitive values from one file or packaged so they can be used by other programs, files or packages with the import statement
	- 2 types: Named Exports (Zero or more exports per module)
	- Default Exports (One per module)
	- Have slightly different syntax for importing and for exporting
	- Cos react is all about components containing small atomic pieces of functionality we'll generally be using default export, so just stick to this pattern for now
- Show console messages
- Content component: see `Content.js`
- Templating example:

	```js
	let valuation = 1000000;
	const formatted = valuation.toLocaleString( "en-GB", { style: "currency", currency: "GBP" });
	```

	- If these values were to change, our funding p tag would always reflect this - not hard coded
- Use `<Content>` in `App`: need to use `<>`/`</>`
- Split out `Funding`, then use in `Header`
- `Pagination` for `.map()`: see `Pagination.js`
- `key` attribute
