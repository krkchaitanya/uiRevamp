import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './RouteComponents/Home';
import About from './RouteComponents/About';
import Contact from './RouteComponents/Contact';
import Error from './RouteComponents/Error';
import NavbarSection from './Navigator/NavbarSection';
import './Style/style.css';

class Header extends Component {

    render() {

        return(
            <React.Fragment>
                <Router>
                    <div>
                        <NavbarSection />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='/contact' component={Contact} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default Header;