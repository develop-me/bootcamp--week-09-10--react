const App = () => (
  <Router>
    <Fragment>
      { /* always show the Header component */ }
      <Header subtitle="Space Wombats">My App</Header>
      { /* if the URL is the homepage, load the Content component  */ }
      <Route exact path="/">
        <Content />
      </Route>
    </Fragment>
  </Router>
);

export default App;
