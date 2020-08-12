# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- For some of these challenges you may want to create more than one component type. Try not to let your JSX get too unwieldy. Create new directories if you're using multiple component types.

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

---

- Create a `<Length>` component. It should contain an `<input>` and tell you how many characters have been typed into the `<input>`.

- Create a `<PasswordStrength>` component. It should contain an `<input>` with the type `password`. The background styling should change depending on the length of the password:

    - If it's empty the background shouldn't have styling.
    - If it's less than 9 it should be red.
    - If it's less than 16 it should be orange.
    - If it's 16 or more then it should be green.

- Create a `<TempConverter>` component. It should have a `°F` and `°C` `<input>`. When you type a number into one `<input>` it should update the value in the other.

- Create a `<List>` component that consists of a `<ul>`, an `<input>`, and a `<button>Add</button>`. When you click the "Add" button, whatever is in the `<input>` should get added to the `<ul>`.

- Create an `<Adder>` component. It should have a number `<input>` field and an "Add" `<button>`. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. **Make sure you test the total is correct: try 1, 2, and 3 and check you get 6**

- Create a `<Transform transform={ /* ...your function here... */ }>` component. It should accept a function that takes a number and returns a number (e.g. a squaring function `x => x * x` or an increment function `x => x + 1`). The component should have an `<input type="number">` and a `<p>`. When the user types into the `<input>` the `<p>` should output the result of running the number through the `transform` function. Try adding a few `<Transform>` components to your app with a different function for each one.

## Tricksy

- Create a `<Form fields={ fields } />` component. It should take an array of field names as a prop and for each one display an `<input>` with an appropriate `<label>`. When the form is submitted it should highlight any fields that are empty with a red outline and display a message saying that the field is required.

    ```js
    let fields = ["First Name", "Last Name", "Email"];
    ```
