import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer';
import { StatusContainer, SnapshotContainer } from '../containers/InfoContainer';
import HistoryContainer from '../containers/HistoryContainer';
import LoginContainer from '../containers/LoginContainer';
import EnsureLoggedInContainer from '../containers/EnsureLoggedInContainer';

const Routes = (
    <Router history={browserHistory}>
        <Route path='/' component={MainContainer}>
            <Route component={EnsureLoggedInContainer}>
                <IndexRoute component={StatusContainer} />
                <Route path='snapshot' component={SnapshotContainer} />
                <Route path='history' component={HistoryContainer} />
            </Route>
            <Route path='login' component={LoginContainer} />
        </Route>
    </Router>
);

export default Routes;
