import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Multiplier from "./Multiplier";
import EvenClicks from "./EvenClicks";
import CountBy from "./CountBy";
import HideMe from "./HideMe";
import MinimumLength from "./MinimumLength";
import AnimalFactsRandom from "./animal-facts/Random";
import AnimalFactsPost from "./animal-facts/Post";
import Posts from "./posts/Posts";

const App = () => (
    <Router>
        <div>
            <h1>My App</h1>
            <Route exact path="/" component={ Posts } />
            <Route path="/animal-facts/random" component={ AnimalFactsRandom } />
            <Route path="/animal-facts/new" component={ AnimalFactsPost } />
            <Route path="/even-clicks" component={ EvenClicks } />
            <Route path="/hide-me" render={ () => (
                <HideMe>Top secret stuff</HideMe>
            ) } />
            <Route
                path="/count-by/:step"
                render={ ({ match }) => (
                    <CountBy step={ +match.params.step } />
                )}
            />
            <Route
                path="/minimum/:length"
                render={ ({ match }) => (
                    <MinimumLength length={ +match.params.length } />
                )}
            />
            <Route
                path="/multiplier/:x/:y"
                render={ ({ match }) => (
                    <Multiplier x={ match.params.x } y={ match.params.y } />
                )}
            />
        </div>
    </Router>
);

export default App;
