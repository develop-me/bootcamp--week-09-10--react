import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import FourOhFour from "./FourOhFour";
import Articles from "./Articles";
import Article from "./Article";
import CreateArticle from "./CreateArticle";
import EditArticle from "./EditArticle";

const App = () => (
    <Router>
        <>
            <Link to="/">
                <h1 className="page-header">Bloggo Magnifico</h1>
            </Link>

            <Switch>
                <Route exact path="/articles" component={ Articles } />
                <Route exact path="/articles/create" component={ CreateArticle } />
                <Route exact path="/articles/:id" render={ ({ match }) => (
                    <Article id={ match.params.id } />
                ) } />
                <Route exact path="/articles/:id/edit" render={ ({ match }) => (
                    <EditArticle id={ match.params.id } />
                ) } />
                <FourOhFour />
            </Switch>
        </>
    </Router>
);

export default App;
