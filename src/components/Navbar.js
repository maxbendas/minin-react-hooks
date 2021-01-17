import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-sm">
            <div className="navbar-brand">
                Github Search
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;