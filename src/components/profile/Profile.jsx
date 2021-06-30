import React from "react";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const Profile = () => {

    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>Profile</div>
    )
}
export default Profile;