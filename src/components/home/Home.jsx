import React from "react";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className='component-container'>
            <h2>Home page</h2>
            <p>Section in development.<br/> Use the links to continue</p>
            <NavLink to={'/profile'}>
                Profile
            </NavLink>
            <NavLink to={'/login'}>
                Login
            </NavLink>
            <NavLink to={'/registration'}>
                Registration
            </NavLink>
        </div>
    )
}
export default Home