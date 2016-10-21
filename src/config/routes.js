import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer';
import Status from '../components/Status';
import Snapshot from '../components/Snapshot';
import InfoContainer from '../containers/InfoContainer';

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={MainContainer}>
            <IndexRoute component={InfoContainer('status', Status)} />
            <Route path='snapshot' component={InfoContainer('snapshot', Snapshot)} />
        </Route>
    </Router>
)

export default routes;
