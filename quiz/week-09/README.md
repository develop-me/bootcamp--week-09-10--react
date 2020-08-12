# Quiz

---

## Rules

- If you get stuck on one for more than 15 minutes, try a different one and come back to it later.
- Feel free to vent any frustration with competitive duck herding.

---

## React

*Use `npm init react-app` to make a new React app called `quiz` for the following challenges.*

Add the Bootstrap 4 CSS file and use Bootstrap styling where appropriate.

### Components

- Create a component `<Multiplier x={ 5 } y={ 7 } />` that takes two props, `x` and `y`, and outputs their product (i.e. x × y) in a `<p>`.

- Create a component `<EvenClicks>` that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.

- Create a component `<CountBy step={ 5 }>` that takes a `step` prop. It should display a number (starting at 0) inside a `<p>`. Every time it is clicked the number should go up by `step`.

- Create a component `<HideMe>Blah blah blah</HideMe>` that uses `children` to accept some content. When the component is clicked the content should be hidden.

- Create a component `<MinimumLength length={ 30 }>` that contains an `<input>`. The user should see a warning, "Too short!", unless they have entered at least `length` characters.


### ReactRouter

- Visiting `/even-clicks` shows `<EvenClicks>`

- Visiting `/hide-me` shows `<HideMe>`

- Visiting `/count-by/5` shows `<CountBy>` with the step value set to 5 (it should work for any value in the URL)

- Visiting `/minimum/20` shows `<MinimumLength>` with the minimum length set to 20 (it should work for any value in the URL)

- Visiting `/multiplier/20/30` uses `<Multiplier>` and displays the result of 20×30 (it should work for any values in the URL)


### React Bootstrap

Update your components to use React Bootstrap components where appropriate.
