import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MainContainer from '../containers/MainContainer';
import { StatusContainer, SnapshotContainer } from '../containers/InfoContainer';
import HistoryContainer from '../containers/HistoryContainer';
import Login from '../components/Login';

const Routes = () => (
    <Router history={browserHistory}>
        <Route path='/' component={MainContainer}>
            <IndexRoute component={StatusContainer} />
            <Route path='snapshot' component={SnapshotContainer} />
            <Route path='history' component={HistoryContainer} />
            <Route path='login' component={Login} />
        </Route>
    </Router>
);

export default Routes;