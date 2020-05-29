# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

---

All of the following challenges will require more than one component. You may want to create a directory per challenge.

1) Create a component `<Button>` which keeps track of how many times it's been clicked (it doesn't need to display it anywhere). It should have a `handleUpdate` prop which accepts a function. Whenever the value of the `<Button>` changes it should also call the `handleUpdate` function and pass it the current value. Use the `<Button>` as follows and check that it logs the value to the console each time the button is clicked.

    ```js
    <Button handleUpdate={ console.log } />
    ```

2) Create a component `<Form>` which keeps track of a `name` and `email` value from `<input>` elements. It should have a `handleSubmit` prop which takes a function. The form should also have a submit button. When the form is submitted it should clear the `<input>`s and pass up an object containing both the `name` and `email` values:

    ```js
    {
        name: "<contents of name input>",
        email: "<contents of email input>",
    }
    ```

    Use it as follow and make sure an object is printed in the console:

    ```js
    <Form handleUpdate={ console.log } />
    ```



## Tricksy Challenges

- Update your `<Form>` component so that the `<input>`s are separate sub-components. You'll need to lift some state.

- Update your `<Form>` so that you can pass in an array containing any number of fields. It should continue to work as before.

    For example:

    ```jsx
    <Form fields={ [
        { label: "Name", name: "name", type: "text" },
        { label: "E-mail", name: "email", type: "email" },
        { label: "Telephone Number", name: "telephone", type: "tel" },
        { label: "Date of Birth", name: "dob", type: "date" },
    ]} />
    ```

    Would generate the following HTML:

    ```html
    <form class="form">
        <div class="form-group">
            <label for="name">Name</label>
            <input class="form-control" id="name" name="name" type="text" />
        </div>
        <div class="form-group">
            <label for="email">E-mail</label>
            <input class="form-control" id="email" name="email" type="email" />
        </div>
        <div class="form-group">
            <label for="telephone">Telephone Number</label>
            <input class="form-control" id="telephone" name="telephone" type="tel" />
        </div>
        <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input class="form-control" id="dob" name="dob" type="date" />
        </div>
    </form>
    ```
