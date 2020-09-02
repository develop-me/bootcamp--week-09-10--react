# Week 1: Day 3 – Afternoon

## ReactRouter [30 mins]

- Library
- Takes URL, decides which code to run/components to show etc.
	- e.g. `app.dev/` = homepage, `app.dev/enquire` = goes to enquiry form
- Why do we need this?
	- Client side routing: means we can navigate around without the page refreshing
	- No flash of a white screen, no blank page
	- Seamless more modern and responsive experience for users
	- Seems like normal browser functionality to the user: can use the back and forward buttons as if it was any other website
    - We are not actually leaving the original page - just changing which components we can see, which components are RENDERED
- Setup: `react-router-dom`
- Multiple Router options: Static, Memory, Native
- Import `BrowserRouter as Router` and `Route`
- BrowserRouter:
	- Uses history API: history object from the DOM Window object - exists for us to use in the browser, lets us see user's history if page navigation
	- Unavailable for IE9 and lower
	- Clean routes: `www.example.com/person/john`
	- Needs to be backed by a web server i.e. if the route only exists in the react app but not on server, reloading, linking etc. (anything that hits the server directly) will return 404
    - 404: HTTP network response, symbolises server or page not found
	- Server has access to the full URL
	- Large applications
    - Works for us because our web server which only deals with rendering our react app
- HashRouter:
	- Uses URL with hash
	- The hash keeps the server side routing independant from client side routing
	- Mainly intended for old browser compatibility
	- Server does not have access to the path after the #
	-`www.example.com/#/person/john`
	- Client interprets bit after the hash
	- Small client side app which doesn't need a backend OR has routes which should not effect the browser URL e.g a widget on a website

- Keep `Header` separate but use `Route` for rest
- Add a route with `exact path="/"` to `Content`:
	```js
	<Router>
    	<>
      	  <Header subtitle="Space Wombats">My App</Header>
     	  <Route exact path="/">
            <Content />
          </>
    	</>
  	</Router>
	```

- Add a route with props to `<Figure>` by wrapping in `<Route>`
	```js
	<Route path="/figure">
     <>
   	    <Figure caption="A cat, strutting its stuff!" src="https://goo.gl/tRdW93" />
        <Figure caption="A fat cat!" src="https://goo.gl/FYXPaS" />
     </>
	</Route>
	```
- Wrapping it in `Route` allows you to just pass in props like normal
- Notice that we are passing the `<Figure/>` component as `children` to `<Route/>`
- Matches *(resource `Article.js`)*:
	- If we want a part of the URL parameters to influence something inside the component or get passed in as a prop we can use the `render` method
    - The render method has access to 3 props:
        - match
        - location
        - history
    - Pass in the word `match` as a prop to the function
    - Inside we return the component we want to pass part of the url to
    - Use `match.params.<parameter>` as the value of the prop we pass down
	```js
	<Route path="/articles/:id" render={ ({ match }) => (
    		<Article article={ match.params.id } />
	) } />
	```
	- `match.params.id` becomes a prop: will change based on url
	- `:id` tells the route to expect that part of the url to change, and to use that in the match
    - Whatever it is you're accessing you put the `:` before and then use the same word after `match.params`
- Discuss `exact`
	- Will only match if the path matches the `location.pathname` exactly
	- `location.pathname` refers to url in the browser after the `.com`
    - Gets the `location.pathname` from the history object
    - Like our articles above, maybe we want `/articles/:id` to take us to a specific article, but `/articles/all` to take us to all articles
    - Currently because we're using the render prop `<Router />` would think we were trying to path to a specific article and pass `all` as the article prop (thinking it was `:id`)
    - Using the prop `exact` would mean we can essentially have 2 similar paths but because one is an exact match `<Router />` will take us know to take us to the `<Route />` which matches the exact path, and not the one which is similar


- So now we have routing: a way for our react components to use the URL to figure out which components or sets of components to render
- BUT: we need to get around our app
- The normal way (`<a></a>`) causes the browser to load from scratch and it would mean we'd lose all our apps state AND kind of make the point of react router redundant!
- `import { Link } from "react-router-dom`
- Use `<Link to="/">`: show it's just a `<a>` in the browser
	- Literally an <a> with `e.preventDefault()` and running a function which updates the address bar and that browser history object for us!
    - We use the `to` prop instead of the `href` attribute
- What about if people put random things in the url - in some cases it might break the app entirely, in others it would appear broken because the user would see a white screen/the same screen
- Use `<Switch>` to get handle 404s
    - `import { Switch } from "react-router-dom`
	- Same as a regular JS switch statement, the last component we put in the switch statement is the default component rendered - so if no other routes match
	```js
	switch(expression) {
	  case x:
    	   // code block
   	   break;
  	  case y:
    	   // code block
    	   break;
  	  default:
    	   // code block
	}

	<Switch>
        <Route exact path="/">
            <Header />
        </Route>
        <Route exact path="/funding">
            <Funding />
        </Route>

        <FourOhFour />
	</Switch>
	```
- Make `<FourOhFour>` component to demonstrate

Programmatic navigation:

- Sometimes it would be nice if our app could navigate for us.
- For example, when we submit a form.
- ReactRouter's custom `history` functionality.
- Create a new file src/history.js:

    ```js
    import { createBrowserHistory } from "history";
    export default createBrowserHistory();
    ```

    - If using `HashRouter` needs to be `createHashHistory`

- How is this history object different from the other times we've mentioned history objects?
    - Hash: DOM-specific implementation for legacy web-browsers
    - Browser: interacts with the HTML5 history API
    - Just different implementations of the same concept, however here we can control our navigation from within the app not just by navigating via the browser
- Then import and add a `history` prop to your `<Router>` in `<App>`:

    ```js
    // import your history file
    import history from "../history";

    // use Router instead of BrowserRouter
    import { Router } from "react-router-dom";
    ```

    ```js
    // pass history in as a prop to the Router
    <Router history={ history }>
    ```
- We use Router instead of BrowserRouter: Router is the 'low-level' interface for all router comps. The others we've mentioned are 'high-level'
- Add to a form submission:

    ```js
    import history from "../history";
    ```

    ```js
    handleSumbit(e) {
        // ...existing form submission stuff

        // go to the homepage
        history.push("/");
    }
    ```


Structure:
- `<Router/>` at the top level
- Components to appear on all pages either here or after your `<Switch>`
- Use the `<Switch />` component to wrap all your `<Route>`s
- Pass components to your `<Routes/>` to determine which path renders them!
    - LEGACY: Single component without props: `component={COMPONENT}`
    - NOW: Single and Multiple components with or without props:
    ```js
        <Route>
            <>
            <ComponentA />
            <ComponentB title="blah" />
            </>
         </Route>
    ```
- URL params important? Pass in with the render method
    ```js
        <Route
          path="/articles/:id"
          render={({ match }) => <Article id={match.params.id} />}
        />
    ```
