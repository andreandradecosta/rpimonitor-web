import { combineReducers } from 'redux';

const filter = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_HISTORY_REQUEST':
            return {
                start: action.start,
                end: action.end
            };
        default:
            return state;
    }
}

const result = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_HISTORY_SUCCESS':
            return [...action.result];
        default:
            return state;
    }
}

const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_HISTORY_REQUEST':
            return true;
        case 'FETCH_HISTORY_SUCCESS':
        case 'FETCH_HISTORY_FAILURE':
            return false;
        default:
            return state;
    }
}

const errorMessage = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_HISTORY_FAILURE':
            return action.message;
        case 'FETCH_HISTORY_REQUEST':
        case 'FETCH_HISTORY_SUCCESS':
            return null;
        default:
            return state;
    }
}

const history = combineReducers({
    filter,
    result,
    isFetching,
    errorMessage
})

export default history;

//Selectors
export const getFilter = (state) => state.filter

export const getResult = (state) => state.result;

export const getIsFetching = (state, start, end) => state.isFetching;

export const getErrorMessage = (state, start, end) => state.errorMessage;
