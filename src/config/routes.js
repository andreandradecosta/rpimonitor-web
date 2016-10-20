import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer';
import StatusContainer from '../containers/StatusContainer';
import Snapshot from '../components/Snapshot';


const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
            <IndexRoute component={StatusContainer} />
            <Route path='snapshot' component={Snapshot} />
        </Route>
    </Router>
)

export default routes;
