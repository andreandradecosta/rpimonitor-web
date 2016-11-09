import { combineReducers } from 'redux';


const result = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_INFO_SUCCESS':
            return {
                ...state,
                [action.resource]: action.result
            }
        default:
            return state;
    }
}

const isFetching = (state = false, action) => {
    switch (action.type) {
        case 'FETCH_INFO_REQUEST':
            return true;
        case 'FETCH_INFO_SUCCESS':
        case 'FETCH_INFO_FAILURE':
            return false;
        default:
            return state;
    }
}

const errorMessage = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_INFO_FAILURE':
            return action.message;
        case 'FETCH_INFO_REQUEST':
        case 'FETCH_INFO_SUCCESS':
            return null;
        default:
            return state;
    }
}


const info = combineReducers({
    result,
    isFetching,
    errorMessage
});

export default info;

//Selectors
export const getResult = (state, resource) => state.info.result[resource] || {};

export const getIsFetching = (state) => state.info.isFetching;

export const getErrorMessage = (state) => state.info.errorMessage;
