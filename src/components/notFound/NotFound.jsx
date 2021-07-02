import React from "react";
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div className='component-container'>
            <h2>Page not found</h2>
            <p>Check the link</p>
            <NavLink to={'/'}>
                GO TO HOME
            </NavLink>
        </div>
    )
}
export default NotFound