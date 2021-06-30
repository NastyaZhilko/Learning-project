import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.less"

const Navbar = () => {
    return (
        <nav>
            <div className="wrapper">
            <div>
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/login" activeClassName="active">Login</NavLink>
            </div>
            <div>
                <NavLink to="/registration" activeClassName="active">Registration</NavLink>
            </div>
            </div>
        </nav>
    )
}
export default Navbar;