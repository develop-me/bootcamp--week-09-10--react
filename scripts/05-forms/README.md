# Day 3: Morning

- Go through challenges from yesterday

## Structure of Day
- AM: Forms
- PM: React Router

## Forms [20 mins]
- Need to be careful with inputs
- State should track *anything* that changes, including the value of an input
- Demo doing that and show the warning in the console 
	- set value to `this.state.input`
	- set input state to something
- Need to update the state, otherwise we can't edit the input
- How do we update our state?
    - Create a method to do so
    - Use `this.setState()` within our method
    - Call our method with an event listener
- Put `onChange` listener on input
	- `onChange` is basically the DOM input event
	- fires on every key stroke!
- Use the `currentTarget` property from the event object
- Create `this.handleChange` method which takes `e` and sets `this.state.input` to `e.currentTarget.value`
- Becuase we are using parameters to pass in an argument to our method we need to remember to wrap our method into an anonymous function, otherwise it would be called on load
- Make sure you bind the event handler
- Now not only can we change and track the changes to the value of our input but we can use that data for other means
- Add p tag, for passwords for example!
	```js
	<p>Length: {this.state.input.length}</p>
	```
- **Controlled component**
- This is called a controlled component, all form elements in a react app should be this!
- Other things to note:
	- `defaultValue` property: for defaults (surprisingly), NB: not the same as placeholder as would be considered the value entered by the user is form was submitted
	- instead of `value` prop
- `value` works for `<select>` and all other form elements - radios, checkboxes etc.
