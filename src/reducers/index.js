import { combineReducers } from 'redux';
import history from './History';
import data from './Data';

const appReducer = combineReducers({
    data,
    history
});

export default appReducer;
