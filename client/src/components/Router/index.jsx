import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router";
import Login from "../Login";
import User from "../User";
import Registration from "../Registration";

class Router extends Component {
    render() {
        return(
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/chat">
                    <User/>
                </Route>
                <Route exact path="/registration">
                    <Registration/>
                </Route>
            </Switch>
        )
    }
}

export default Router;