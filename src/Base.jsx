import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LayoutLogged from './components/LayoutLogged/LayoutLogged';

class Base extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ LayoutLogged } />
            </Switch>
        )
    }
}

export default Base;