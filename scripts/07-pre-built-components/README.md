# Day 4

- Go through challenges from yesterday

## Structure of Day
- Pre-Built Components
- Deployment

## Pre-Built Components [5 mins]

- You'll remember react props use this one way data flow 
	- Parent comp to child comp
	- Means can use component anywhere in app
- That also means we can use in *any* React app
- Gives us access to all other react components made by anyone ever
- Large ecosystem of components
- Rely on documentation, if its bad - move on!
- 2 main kinds of component
- Larger collection of pre-built components
	- Components which will do many things
	- Focus is on the way the components work together or look together rather than specific functionality
	- React Bootstrap
- Specific single use case components
	- Do one thing or focus on a single area of things and do it well
	- A single component, often heavily modifiable with lots of components
	- React Datepicker

### React Bootstrap [15 mins]

- include Bootstrap CSS file
- `npm install react-bootstrap`
- In notes different import but according to docs we should use this
 `import Button from 'react-bootstrap/Button';`
- Only imports specific components you want to use, more performant
- Lets look at docs to see how to use: https://react-bootstrap.netlify.com/components/buttons/#buttons
- Demonstrate basic `<Button>` with `variant`
	```js
	<Button variant="primary">I'm a blue button!</Button>
	```
	
- The ease of this is all down to the excellent documentation!
- DOM props get passed through to the component and it puts them on the jsx elements for us
- Add an `onClick` handler to `<Button>`: works as you'd expect!
- Redo `<Figure>` with Bootstrap Card
	```js
	// as just names sets the html element rendered
	<Card as='figure'>
    	   <Card.Img variant="top" alt={imgCaption} src={src} />
    	   <Card.Body>
      	      <Card.Text as="figcaption">{imgCaption}</Card.Text>
    	   </Card.Body>
  	</Card>
	```
- We can see the syntax is slightly different, but again - follow the documentation to understand that, and note it works with our props just like it was our own component
- Only difference between using these and our own, as we can't immediately see what goes on inside their components
- We can check the source code in node_modules or the github repo to see this!
- Mention React Native: 
	- The mobile phone app version of react, although react apps can exist on a mobile they run in a hidden browser
	- A native app runs directly on the phone, compiles down to different code language than javascript depending on if the phone is iOS or android etc.
	- The concept of pre-built components exists here too and is an actual part of the library - however instead of it being html and js, as these are browser based languages, the components represent UI components like buttons sliders
	- Look into react native a little bit if you want to!


### React Datepicker [5 mins]

- Writing a date picker is hard, something a lot of app and websites use and there's no point re-inventing the wheel when there's plenty of pre-built react components out there
- `npm install react-datepicker`
- `import "react-datepicker/dist/react-datepicker.css";`
- `import DatePicker from "react-datepicker";`
- lets see how the docs say to use this: https://github.com/Hacker0x01/react-datepicker
- uses `Date` objects
	```js
	handleDate = date => {
    	  this.setState({
      	    startDate: date
    	  });
  	};

	<DatePicker selected={ date } onChange={ this.handleDate } />
	```
- There you have it, there's such a huge range of pre-built components out there
- Some incredibly complex, some super simple: documentation is key
- Also look at how many people have used it, how many issues there are open/closed on github to help you choose
