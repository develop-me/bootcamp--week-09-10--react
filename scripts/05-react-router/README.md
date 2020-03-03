# Day 3: Afternoon

## ReactRouter [30 mins]

- Takes URL, decides which code to run/components to show etc.
	- e.g. `app.dev/` = homepage, `app.dev/enquire` = goes to enquiry form
- Why do we need this?
	- Client side routing: means we can navigate around without the page refreshing
	- No flash of a white screen, no blank page
	- Seamless more modern and responsive experience for users 
	- Seems like normal browser functionality to the user: can use the back and forward buttons as if it was any other website
- Setup: `react-router-dom`
- Import `BrowserRouter as Router` and `Route`
- BrowserRouter:
	- Uses history API: history object from the DOM Window object, lets us see user's history if page navigation
	- Unavailable for IE9 and lower
	- Clean routes: `www.example.com/person/john`
	- Needs to be backed by a web server i.e. if the route only exists in the react app but not on server, reloading, linking etc. (anything that hits the server directly) will return 404
	- Server has access to the full URL
	- Large applications
- HashRouter:
	- Uses URL hash
	- Server side routing independant from client side routing
	- No browser issues
	- Server does not have access to the path behind the #
	-`www.example.com/#/person/john`
	- Client interprets bit after the hash
	- Small client side app which doesn't need a backend OR is has routes which should not effect the browser URL e.g a widget on a website
- Keep `Header` but use `Route` for rest
- Add a route to `exact path="/"` to `Content` using `component`
	```js
	<Router>
    	<>
      	  <Header subtitle="Space Wombats">My App</Header>
     	  <Route exact path="/" component={ Content }/>
    	</>
  	</Router>
	```

- Discuss `exact`
	- will only match if the path matches the location.pathname exactly
	- remember location.pathname refers to url in the browser
- Add a route with props to `<Figure>` by wrapping in `<Route>` (`src="https://goo.gl/FYXPaS"`)
	```js
	<Route path="/figure">
   	 <Figure
       		 caption="A cat, strutting its stuff!"
        	 src="https://goo.gl/tRdW93"
   	 />
	</Route>
	```
- Wrapping it in `Route` allows you to just pass in props like normal
- Matches:
	- URL parameters with `render` prop and `match.params.<parameter>` (resource `Article.js`)
	```js
	Route path="/articles/:id" render={ ({ match }) => (
    		<Article article={ match.params.id } />
	) } />
	```
	- `match.params.id` becomes a prop: will change based on url
	- `:id` tells the route to expect that part of the url to change, and to use that in the match 
- So now we have routing: a way for our react components to use the URL to figure out which components or sets of components to render, we need to get around our app
- BUT: the normal way (`<a></a>`) causes the browser to load from scratch and it would mean we'd lose all our apps state AND kind of make the point of react router redundant!
- Use `<Link to="/">`: show it's just a `<a>`
	- literally an <a> with `e.preventDefault()` and running a function which updates the address bar and that browser history object for us!
- What about if people put random things in the url - it breaks the app!
- Use `<Switch>` to get handle 404s
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
