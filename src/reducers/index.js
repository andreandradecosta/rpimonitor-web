import { combineReducers } from 'redux';
import history, * as fromHistory from './History';

const appReducer = combineReducers({
    history
});

export default appReducer;

export const getFilter = (state) =>
    fromHistory.getFilter(state.history);

export const getResult = (state) =>
    fromHistory.getResult(state.history);

export const getIsFetching = (state) =>
    fromHistory.getIsFetching(state.history);

export const getErrorMessage = (state) =>
    fromHistory.getErrorMessage(state.history);
