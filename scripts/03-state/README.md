# Day 2

- Go through challenges from yesterday

## Structure of the Day
- Events: the react way of writing event listeners
- Class components: a slightly different way to layout a component which comes with some extra functionality
- State: specific to class components, local 'knowledge' stored in the component

**Don't mention state until the State section!**

## Events [5 mins]
- Use `onClick` to make `Header` do something
	
	```js
	onClick={ () => console.log("clicked") }
	```

- Explain that there's one for every event: check out the react docs for a full list
- Using plain old DOM under the hood
- Even removes listeners from components which are no longer visible
- Can only add to HTML, not React components (where it would be a prop)

## Class Components [10 mins]
- Don't want inline event handlers, gets super messy if you have any remotely complicated functionality
- Can use class methods
- Go through stateless -> class component transform
	- Import Component constructor from React, extend from it
	- Extending = copy + add functionality
	- Creates a JS class with the same name as the function you’re replacing
	- Needs a render method which holds the return
	- Returns the exact JSX that the function version
returned
	- Props don’t get passed into render, instead you use this.props, by default Component accepts props
	- Use object destructuring on this.props

	```js
	import React, { Component } from "react";

	class Header extends Component {
		handleClick() {
			console.log("hellooo");
  	   	}
	
		render() {
			const { title, subTitle } = this.props;

   	    	return (
		<>
			<h1 className="alert alert-primary" onClick={this.handleClick}>
          		{title}
        	    	</h1>
        	    	<p>{subTitle}</p>
      		</>
    		);
  	    }
	}

	export default Header;
	```

- Best to start all components using the stateless/function syntax and only make them into class components when you need to 
	- less code
	- potential performance boost
	- easier to read
	- enforces you to define components functionality/uses: think about subcomponents and parent components

## State [30 mins]
- Now we've got an object, we can have local state inside our component
- Just like we have `this.props`, we now also have `this.state`
- Similar to state with DOM: long lived-variables (because event handlers are short-lived)
- 3 parts:
	- Initial state in the constructor: counter example
	```js
	
	constructor(props) {
		super(props);
		// super() is used to call the parent constructor
		// super(props) would pass props to the parent constructor Component
		this.state = { counter: 0 };
	}

	```
	
	- display values based on `this.state` in our JSX: destructure like props
	```js
	const { counter } = this.state;

	<h1>{this.state.counter}</h1>
	```	

	- updating `this.state` when events fire and trigger our methods: `this.setState();`

	```js
	handleClick() {
		let current = this.state.counter;
		this.setState({ counter: current + 1 });
	}
	```

- Just a Plain Old JavaScript Object
- This is why we call the other kind of comp functional or stateless
- Only class based comps can have state
- Have to use `setState()` so that React knows to re-render
	- runs at the end of the method, not synchronous
	- watch out for this, if you're finding your render is behind your state or out of sync it's likely a bug to do with this
- Careful about changing state by accident (`push`, `pop`, increment operator)
	- instead use `concat`, spread operator, our array iterators
	- methods and functions which do not modify the existing variable but create a new one
	- another common cause of bugs to watch out for
- Need to bind `this`
	- its weird, its clunky but the concept of this is broken is JS
	- `this` - refers to object executing current code
	- if your method uses `this`, bind it in the constructor
	```js
	this.handleClick = this.handleClick.bind(this);
	```
- AGAIN: `this.setState()` does not update state till after method has finished, therefore don't `console.log()` after `setState()`
- React Developer Tools: useful for seeing state
- What is state and why do we use it?
	- keep track of whats going on in your components
	- its current state
	- like a memory
- What to put in state?
	- what do we want to change?
	- what types would be best to track the changes
		- a boolean if tracking something with 2 values? i.e. open or closed
		- an array if the previous values count? i.e list
	- the simpler/smaller, the better
	- can you infer the state of one thing from another? if so only track one i.e. button red if click is even - don't need to store colour and counter because they are tied with logic
- How to put it all together
	1. The boilerplate: imports, exports and basic class declaration
		- Don't be afraid to copy paste it, you will get used to it overtime but it's good practice to try and write it out because it encourages you to understand it
	2. Pop in your render method and focus on getting some JSX to display the way you want it to 
		- Doesn't have to perfect or too complicated just take it one step and a time
	3. State time: Ask yourself the questions we spoke about
	4. Update the render method to use the initial state
		- Remember you can destructure your state in the `render()` method
	5. Try manually changing the initial state values to make sure your JSX is rendering what you'd expect/want
	6. Now add the interactivty - add your event handlers
		- Don't forget:	using `this.setState()`? BIND
		- Modifying state? Make sure you don't change the state DIRECTLY, but reassign it
		- Not sure what a method or operator does? Use MDN docs
- Finally, unexpected crazy weird things going on? Don't panic - take a breath and try to use the react dev tools to see what's going on - he's your new best friend.
- It's okay if this all seems a bit much right now!
- Use git!
