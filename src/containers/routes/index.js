import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import AdminPage from './AdminPage';

class Routes extends Component {

    render() {

        return (
            <Switch>
                <Route exact path='/' component={AdminPage} />
                
            </Switch>
        )
    }
}

export default Routes;
