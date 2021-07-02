import React from "react";
import './App.less'
import {Route, Switch, Redirect} from "react-router-dom";
import Login from "./login/Login";
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";
import Registration from "./registration/Registration";
import Home from "./home/Home";
import NotFound from "./notFound/NotFound";

const App = () => {

    return (
        <div className="container">
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path='/' render={() => <Home/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/profile' render={() => <Profile/>}/>
                    <Route path='/registration' render={() => <Registration/>}/>
                    <Route render={()=><NotFound/>}/>
                </Switch>
            </div>
        </div>
    )
}
export default App