# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

---

- Change the `<Header>` and `<Paragraph>` back to stateless components. If you've been using Git, this [shouldn't take very long](https://git-scm.com/docs/git-revert).

---

All of the following challenges will require more than one component. You may want to create a directory per challenge.

You might also find it easier to create them as a *single component* first and then to break out the repeated sub-component once you've got it working.

- Create a component `<Squares color="hotpink">` that displays two of your `<Square>` components and passes through the `color` prop. As before, when clicked the background colour should change. But only one of the `<Square>`s should show the given colour at once. You'll need to turn your squares back into stateless components.

- Create a component `<Password label="Password">` that contains an `<input>` with a `<label>`. Inside a `<SignUp minimumLength={ 12 }>` component put two of these `<Password>` components: one should have the label "Password" and the other "Confirm Password". Both `<Password>` components should have a red border *unless* they are longer than `minimumLength` and match each other.

- Create a `<Form fields={ fields } />` component. It should take an array of field names as a prop. Create an `<Input>` component which displays an `<input>` with an appropriate `<label>`. Create an `<Input>` for each field name that the `<Form>` is passed as props. When the form is submitted it should highlight any fields that are empty with a red outline and display a message saying that the field is required.

    ```js
    let fields = ["First Name", "Last Name", "Email"];
    ```

- Create a component `<Max count={ numbers }>` that you pass an array of numbers. For each number in the array it should display one of your `<Counter>` components with that number as the initial value. The counter with the highest value should be highlighted.


## Tricksy Challenges

- Create a `<Calculator>` component. It should have one button for each digit between 0 and 9, four buttons for `+`, `-`, `×`, and `÷`, and an `=` button. It should work like an old-school calculator: as you press digits they appear on the screen, then you click an operator, then you type in another number. When you press the `=` button the answer appears on screen. If you're feeling fancy add memory buttons too: `M+` (add to memory), `MC` (clear memory), and `MRC` (memory recall).

- Create a two-player noughts and crosses game (i.e. two users playing, no AI). It should alternate automatically between noughts and crosses. It should also know when the game is over and display who has won.
