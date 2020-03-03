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
- Use the `currentTarget` property from the event object
- create `this.handleChange` method which takes `e` and sets `this.state.input` to `e.currentTarget.value`
- Make sure you bind the event handler
- Put `onChange` listener on input
	- `onChange` is basically the DOM input event
	- fires on every key stroke!
- Add p tag, for passwords for example!
	```js
	<p>Length: {this.state.input.length}</p>
	```
- **Controlled component**
- This IS a controlled component, all form elements in a react app should be this!
- Other things to note:
	- `defaultValue` property: for defaults (surprisingly), NB: not the same as placeholder as would be considered the value entered by the user is form was submitted
	- instead of `value` prop
- `value` works for `<select>` and all other form elements - radios, checkboxes etc.
