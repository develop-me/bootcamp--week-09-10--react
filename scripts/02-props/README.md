# Day 1: Afternoon

## Props [40 mins]
i(Straight after lunch unless big issues with exercises)

- So far:
	- what are components/how they are structured
	- contain jsx in the return, and this differs from regular html
	- can act as parent or sub/child components
	- we can re-use them as many  times as we want
	- we can import them anywhere in our app
- BUT how re-usable have any of them really been? All been hardcoded
- Show `Figure` component
- Image and caption hard-coded: ideal because cats, but realistically very limiting
- Remember JSX = templating language = creation of placeholders which will render differently based on certain data passed into the placeholders, iteration and conditionals
	- Pagination.js
	- e.g. button, text placeholder - data passed in could be close, buy, enquire, banana
	- all button component instances share same structure, logic, functionality, design pattern (for the most part) but the data that is rendered differently is what makes them truly re-usable, flexible and interactive
- That data is called props
- Stands for properties 
- Used for passing data from one component to another.
- Gets passed in as an object
- We can destructure them
- One way data flow:
        - one way from parent to child
        - props data is read-only
        - data coming from the parent should not be changed by child components
        - child components doesn't need to know about parent
- Show passing in with props
- Update to use props
- Show multiple `Figures`: `https://goo.gl/FYXPaS`
- Show using string, number, boolean, array, object literal
- Update `Header` to pass in title and sub-title
- Pagination.js demonstrated iteration changing the way a component renders, but what about conditionals?
- Use the ternary operator: to only show subtitle sometimes
	- An expression that evaluates to a boolean value
	- If the condition is true, the ternary operator returns expression_1, otherwise it returns the expression_2
- Expression: any unit of code that can be evaluated to a value
- Statement: an instruction to perform a specific action
- Children props: update `Header`
	- For when what you're rendering has its own set structure/template i.e. another component
	- For components that don’t know their children ahead of time
	- Can only pass in a single, can  use alongside normal props
	- This is especially common for components like Header or NavBar that represent generic “boxes”
- Show passing in `Funding` into `Heading`
- Show `Heading` with text as the children
- ReactRouter/React-Redux all use passing in elements with `children`
- `defaultProps`: `Caption Here` and `http://via.placeholder.com/350x350`
	```js
	Figure.defaultProps = {
  		imgCaption: "A caption",
  		src: "http://via.placeholder.com/350x350",
	};

	```
- Default props only used if the prop is not present, not for falsey values
- Useful for when you have components where you always want to render something, or a component which you want to use as a preview AND to reflect actual data
