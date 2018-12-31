import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import { withRouter } from 'react-router-dom';
import Home from './RouteComponents/Home';
import About from './RouteComponents/About';
import Contact from './RouteComponents/Contact';
import Error from './RouteComponents/Error';
import NavbarSection from './Navigator/NavbarSection';
import './Style/style.css';


class Header extends Component {
     constructor() {
        super();
    }

    render() {
        console.log(this.props);
        return(
            <React.Fragment>
                <Router>
                    <div>
                        <NavbarSection />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/about' component={About} />
                            <Route 
                                path={{
                                    pathname:'/contact',
                                    hash:'#submit',
                                    serch:'?quick-submit=true',
                                }} 
                                component={Contact}
                            />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default Header;