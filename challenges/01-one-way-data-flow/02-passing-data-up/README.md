# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

---

All of the following challenges will require more than one component. You may want to create a directory per challenge.

1) Create a component `<Button>` which uses Hooks to keep track of how many times it's been clicked (it doesn't need to display it anywhere). It should have a `handleUpdate` prop which accepts a function. Whenever the value of the `<Button>` changes it should also call the `handleUpdate` function and pass it the current value. Use the `<Button>` as follows and check that it logs the value to the console each time the button is clicked.

    ```js
    <Button handleUpdate={ console.log } />
    ```

2) Create a component `<Form>` which uses Hooks to keep track of a `name` and `email` value from `<input>` elements. It should have a `handleSubmit` prop which takes a function. The form should also have a submit button. When the form is submitted it should pass up an object containing both the `name` and `email` values:

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

- Create a `<Calculator>` component. It should have one button for each digit between 0 and 9, four buttons for `+`, `-`, `×`, and `÷`, and an `=` button. It should work like an old-school calculator: as you press digits they appear on the screen, then you click an operator, then you type in another number. When you press the `=` button the answer appears on screen. If you're feeling fancy add memory buttons too: `M+` (add to memory), `MC` (clear memory), and `MRC` (memory recall).

- Create a two-player noughts and crosses game (i.e. two users playing, no AI). It should alternate automatically between noughts and crosses. It should also know when the game is over and display who has won.
