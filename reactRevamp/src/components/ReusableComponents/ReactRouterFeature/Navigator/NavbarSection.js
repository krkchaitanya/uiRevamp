import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarSection = () => {
    return(
        <nav className="navigationRouter">
    `       <div>
                <NavLink exact className="navlink" to="/">Home</NavLink>
                <NavLink className="navlink" to="/about">About</NavLink>
                <NavLink className="navlink" to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}

export default NavbarSection;