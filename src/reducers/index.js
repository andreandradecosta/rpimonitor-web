import { combineReducers } from 'redux';
import history from './History';
import info from './Info';

const appReducer = combineReducers({
    info,
    history
});

export default appReducer;
