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
- Even removes listners from components which are no longer visible
- Can only add to HTML, not React components (where it would be a prop)

## Class Components [10 mins]
- Don't want inline event handlers, gets super messy if you have any remotely complicated functionality
- Can use class methods
- Go through stateless -> class component transform
	- Import Component from React, extend from it
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
- Now we've got an object, we can have local state
- Similar to state with DOM: long lived-variables (because event handlers are short-lived)
- `this.props` and `this.state`
- Initial state in the constructor: counter example
- Just a Plain Old JavaScript Object
- Have to use `setState()` so that React knows to re-render
- Careful about changing state by accident (`push`, `pop`, increment operator)
- Need to bind `this`
- Don't `console.log()` after `setState()`, it's delayed
- React Developer Tools: useful for seeing state
