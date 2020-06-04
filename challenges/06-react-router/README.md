# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

## ReactRouter

**Make sure you use the standard rules for URL style: all lower-case with hyphens between words**

Rather than displaying all your components at once inside `<Stuff>`, use routing in `<App>` to only show specific components:

- Update your app with a few `<Route>`s to different URLs for components that don't require props
- Update your app with a few `<Route>`s to different URLs for components that *do* require props
- Create a component `<Footer>` containing a list of links to the components you've routed to and then include it at the bottom of every page. Make sure the page doesn't do a full refresh when the links are clicked.
- Make sure that 404s are handled properly
- Create a route `/squares/:colour` which will show your `Squares` component using the colour provided in the URL
- Create a route `/steps/:max/:step` which will show your `StepCounter` component using the values of `max` and `step` given in the URL
