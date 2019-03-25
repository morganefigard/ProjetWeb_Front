import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './containers/Admin.js'
import Home from './Dashboard.js'
import {Component} from 'react';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/admin" exact component={Admin} />
            </Switch>
        )
    }
}