import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.less"

const Navbar = () => {

    const [activeMenu, setActiveMenu] = useState(false)

    const toggle = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <div className="sidebar">
            <div className="menu" onClick={toggle}>&#9776;</div>
            <div className={`${"containerMenuLinks"} ${activeMenu && "activeMenu"}`}>
                <div className="links">
                    <NavLink to="/profile" activeClassName="active"> Profile </NavLink>
                    <NavLink to="/login" activeClassName="active"> Login </NavLink>
                    <NavLink to="/registration" activeClassName="active"> Registration </NavLink>
                    <NavLink to="/" activeClassName="active"> Home </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
