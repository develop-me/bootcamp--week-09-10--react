# Day 3: Afternoon

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
	- No browser issues
	- Server does not have access to the path after the #
	-`www.example.com/#/person/john`
	- Client interprets bit after the hash
	- Small client side app which doesn't need a backend OR has routes which should not effect the browser URL e.g a widget on a website
    
- Keep `Header` separate but use `Route` for rest
- Add a route with `exact path="/"` to `Content` using the `component` prop
	```js
	<Router>
    	<>
      	  <Header subtitle="Space Wombats">My App</Header>
     	  <Route exact path="/" component={ Content }/>
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
	- If we want a part of the URL parameters to influence something inside the component or get passed in as a prop we can use the `render` prop 
    - The render props contains a function
    - Pass in the word `match` as a prop to the function 
    - Inside we return the component we want to pass part of the url to
    - Use `match.params.<parameter>` as the value of the prop we pass down
	```js
	Route path="/articles/:id" render={ ({ match }) => (
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
        <Route exact path="/" component={Header} />
        <Route exact path="/funding" component={Funding} />
		<Route component={FourOhFour} />
	</Switch>
	```
- Make `<FourOhFour>` component to demonstrate 

Structure:
- `<Router/>` at the top level
- Components to appear on all pages either here or after your `<Switch>`
- Use the `<Switch />` component to wrap all your `<Route>`s
- Pass components to your `<Routes/>` to determine which path renders them!
    - Single component without props: `component={COMPONENT}`
    - Multiple components with or without props:
    ```js
        <Route>
            <>
            <ComponentA />
            <ComponentB title="blah" />
            </>
         </Route>
    ```
- URL params important? Pass in with the render prop
    ```js
        <Route
          path="/articles/:id"
          render={({ match }) => <Article id={match.params.id} />}
        />
    ```
