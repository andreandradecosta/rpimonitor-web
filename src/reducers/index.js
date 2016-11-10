import { combineReducers } from 'redux';
import history from './History';
import info from './Info';
import auth from './Auth';

const appReducer = combineReducers({
    info,
    history,
    auth
});

export default appReducer;
