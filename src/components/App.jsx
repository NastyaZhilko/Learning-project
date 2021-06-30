import React from "react";
import './App.less'
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Registration from "./registration/Registration";

const App = () => {

    return (
        <div className="container">
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path='/' render={() => <Profile/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/registration' render={() => <Registration/>}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </div>
    )
}
export default App