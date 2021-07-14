import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import "./Profile.less"
import {logoutTC} from "../redux/reducers/login-reducer";


const Profile = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.login.isLoggedIn)

    const history = useHistory()

    if (!isLoggedIn) {
        setTimeout(() => {
            history.push('/login')
        }, 7000)
    }
    const logOutHandler = () => {
        dispatch(logoutTC())
    }
    return (
        <div className="container-profile">
            {!isLoggedIn ?
                <div className="alert-warning">
                    Чтобы просматривать эту страницу, нужно зайти на сайт. Мы перенаправим вас на страницу авторизации.
                </div>
                :
                <div>
                    <h2>Profile</h2>
                    <button onClick={logOutHandler}>Log Out</button>
                </div>
            }
        </div>
    )
}
export default Profile;
