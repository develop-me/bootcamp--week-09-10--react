# Day 3: Afternoon

## ReactRouter [30 mins]

- Takes URL, decides which code to run/components to show etc.
- Why do we need this?
	- Client side routing: means we can navigate around without the page refreshing
	- No flash of a white screen, no blank page
	- Seamless more modern and responsive experience for users 
	- Seems like normal browser functionality to the user: can use the back and forward buttons as if it was any other website
- Setup: `react-router-dom`
- Import `BrowserRouter as Router` and `Route`
- Keep `Header` but use `Route` for rest
- Add a route to `exact path="/"` to `Content` using `component`
- Discuss `exact`
- Add a route with props to `<Figure>` by wrapping in `<Route>` (`src="https://goo.gl/FYXPaS"`)
- Demonstrate URL parameters with `render` prop and `match.params.<parameter>` (resource `Article.js`)
- Use `<Link to="/">`: show it's just a `<a>`
- Use `<Switch>` to get 404s
