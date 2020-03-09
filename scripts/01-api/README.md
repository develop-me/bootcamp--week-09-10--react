# Day 1

Breaks:
    - 11:30-12:00 Morning Break
    - 13:00-14:00 Lunch
    - 15:30-16:00 Afternoon Break

### Lifecycle Methods

- For class based components, methods that React calls for us
- `render`: should just return JSX, not side-effects
- `constructor`: settings up initial state and binding methods
- `componentDidMount`: side-effects when the component first renders
    - show `setTimeout` example
    - show adding `window` event handler
- `componentWillUnmount`: when the component is about to be removed
    - show removing `window` event handler
- `componentDidUpdate`: gets called every time component updates
    - show updated `document.title` each time counter changes

### AJAX

- So far we only know `GET` and `POST` in browsers - by navigating or submitting a form
- Asynchronous JavaScript and XML - outdated term (see `employees.xml`)
- Mostly use JSON (see `employees.json`)

### Axios

- `XMLHttpRequest` - grim
- `fetch` - better, but still quite complicated
- Axios - nice
- `npm install axios`
- Can configure with defaults (see `axios.js`)
- In `index.js`: `axios.get("/people")`

### Asynchronous Programming

- Don't get a response back immediately
- JS can't just wait around for something to happen
- Need to do something *when we get a response*
- Similar concept to event handlers

### Promises

- Axios returns a Promise
- Has a `.then()` method
- First argument passed in is the `response`
- Generally chain promises
- No guarantee promises will resolve in the order you write them in - `GET` tends to be quicker
    - Show requests to:
        - `https://httpbin.org/delay/5`
        - `https://httpbin.org/delay/1`
- Errors:
    - Second argument of `.then()`
    - `.catch()` on the end
    - Useful for form validation
- Use Network console to debug


**Challenges**: `challenges/01-api/README.md`
