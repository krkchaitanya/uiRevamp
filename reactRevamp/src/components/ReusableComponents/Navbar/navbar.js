import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

class Navbar extends Component {

    constructor(props) {
        super();
        this.state = {
            navbarData: props.navbarArrayData 
        }
    }
    render() {

        return (
            <Fragment>
                <nav className='navbar container'>
                    <div><a href="#divone">Navone</a></div>
                </nav>
                <section className="navBody">

                </section>
            </Fragment>
        );

    }
}

Navbar.propTypes = {
    navbarArrayData: PropTypes.any,
}
Navbar.defaultProps = {
    navbarArrayData: [
        {
            tabName: "Tabone",
            tabBodyInfo: "sdhf ausidhf iua jhsd vfiau asd sugd auyh fuds hiaeuwyfosd hersaoi geaori jvfdjkhgsgdfhigodsf sugd auyh fuds hiaeuwyfosd hersaoi geaori jvfdjkhgsgdfhigodsf"
        }
    ]
}

export default Navbar;