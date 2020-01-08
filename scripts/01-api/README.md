# Day 5


## AJAX

- So far we only know `GET` and `POST` in browsers - by navigating or submitting a form
- Asynchronous JavaScript and XML - outdated term (see `employees.xml`)
- Mostly use JSON (see `employees.json`)


## Axios

- `XMLHttpRequest` - grim
- `fetch` - better, but still quite complicated
- Axios - nice
- `npm install axios`
- Can configure with defaults (see `axios.js`)
- In `index.js`: `axios.get("/people")`


## Asynchronous Programming

- Don't get a response back immediately
- JS can't just wait around for something to happen
- Need to do something *when we get a response*
- Similar concept to event handlers


## Promises

- Axios returns a Promise
- Has a `.then()` method
- First argument passed in is the `response`
- Generally chain promises
- No guarantee promises will resolve in the order you write them in - `GET` tends to be quicker
- Errors:
    - Second argument of `.then()`
    - `.catch()` on the end
    - Useful for form validation
- Use Network console to debug


## Lifecycle Methods

- Demonstrate making Axios request on a form submission
    - `setState()` in the `.then()`
- Demonstrate `componentDidMount` (see `StarWarsFolks.js`)
