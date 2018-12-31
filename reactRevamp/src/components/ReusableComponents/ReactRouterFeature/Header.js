import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from 'axios';
// import { withRouter } from 'react-router-dom';
import Home from './RouteComponents/Home';
import About from './RouteComponents/About';
import Contact from './RouteComponents/Contact';
import Error from './RouteComponents/Error';
import NavbarSection from './Navigator/NavbarSection';
import './Style/style.css';


class Header extends Component {

    state={
         writers:[]
     }

     componentDidMount() {
        //  Run server >>> ./MockServer/index.js
        axios.get("http://localhost:2625/writers").then((res) => {
         this.setState({
             writers: res.data.writers
         })
     }).catch((error) => {
         console.log(error);
     });
    }

    render() {
        return(
            <React.Fragment>
                <Router>
                    <div>
                        <NavbarSection />
                        <Switch>
                            <Route exact path='/' render={() => <Home />} />
                            <Route path='/about' render={() => <About title='About Component'/>} />
                            <Route path='/contact' render= {(props) => <Contact {...props} writers={this.state.writers}/>} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default Header;