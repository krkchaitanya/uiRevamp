import React, { Component } from "react";
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import Header from "./ReusableComponents/Rrouter/Header";
import App from "./App";


class AppRouter extends Component {
    
    render() {
        return(
            <Router>
                <Switch>
                    
                    {/* react router */}
                    <Route exact path="/">
                        <Header />
                    </Route>

                    {/* application */}
                    <Route path="/app">
                        <App />
                    </Route>

                </Switch>
            </Router>
        );
    }
};

export default AppRouter;