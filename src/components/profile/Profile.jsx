import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
import "./Profile.less"

const Profile = () => {

    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

    const history = useHistory()

    if (!isLoggedIn) {
        setTimeout(() => {
            history.push('/login')
        }, 7000)
    }

    return (
        <div className="container-profile">
        { !isLoggedIn ?
            <div className="alert-warning" >
                Чтобы просматривать эту страницу, нужно зайти на сайт. Мы перенаправим вас на страницу авторизации.
            </div>
            :

        <div>Profile</div>
}
        </div>
    )
}
export default Profile;