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


### API Requests

[`restful.training`](https://github.com/develop-me/restful.training#animal-facts) has an "Animal Facts" API. (You'll need the password `wsYZzT8_m_pwBNDjSk77` to sign-up if you've lost your login.)

Put these components in an `animal-facts` directory inside `src`.

Use React Bootstrap where appropriate.

- Create a `<Random>` component that displays a random animal fact in a `<Card>`. If the fact is made up then display it in a red box, otherwise display it in a green box.

    ![Random](img/AFRandom.png)

- Create a `<Post>` component that posts an animal fact. It should have a textarea with a maximum length of 255 and a checkbox for whether the fact is made up or not. Make sure the user doesn't submit an empty fact. Once the fact is submitted it should show an appropriate message.

    **Any facts you add will appear in other people's apps, so don't write anything you wouldn't want to share**

    ![Random](img/AFPost.gif)

### Tricksy: Lifting State & Passing Data Up

Create a component `<Posts>` that consists of a list of items that have a title and some text. Underneath the list of items should be a `<Form>` component that has a "Title" and "Text" input and a "Submit" button.

- You should only be able to submit the form if all the inputs have something typed in them.
- When the form is submitted it should add a new item to the list of posts.
- When the form is submitted the form fields should become blank
- The inputs should be controlled by the `<Form>` component and only pass their values up to `<Posts>` when the `<form>`'s `onSubmit` event handler is fired.
- If there are no posts it should say "No posts"
- Feel free to make other components if it makes sense to do so
- Make it so that `<Posts>` is visible if you visit the root route (i.e. `/`)

![Tricksy](tricksy.png)
