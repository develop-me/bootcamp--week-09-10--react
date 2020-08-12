# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

## Lifecycle Methods

- Create a component `<Titler>` that contains two `<input>`s. Use `componentDidUpdate` so that whenever the value of either `<input>` changes, it updates the DOM `document.title` property to be the value of both `<input>`s concatenated with a space.


## Tricksy

- Create a component `<Timer start={ 60 }>`. It should start at the given value and count down every second. You should use [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrworkerGlobalScope/setInterval)

    - Make sure the timer stops at 0
    - Make sure you clear the interval when the component is unmounted
