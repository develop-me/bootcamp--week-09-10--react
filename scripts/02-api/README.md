# Day 2

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
- In `index.js`: `axios.get("/articles")`

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


**Challenges**: `challenges/03-api/01-ajax/README.md`



### AJAX in components

- Change state in `then` if on a form submission (**`Form.js`**)
- `componentDidMount` if we need the data straight away
    - **`Articles.js`**
- **Not ideal**: limits reusability of components


**Challenges**: `challenges/03-api/02-components/README.md`
