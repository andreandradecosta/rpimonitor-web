import { combineReducers } from 'redux';


const result = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
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
        case 'FETCH_DATA_REQUEST':
            return true;
        case 'FETCH_DATA_SUCCESS':
        case 'FETCH_DATA_FAILURE':
            return false;
        default:
            return state;
    }
}

const errorMessage = (state = null, action) => {
    switch (action.type) {
        case 'FETCH_DATA_FAILURE':
            return action.message;
        case 'FETCH_DATA_REQUEST':
        case 'FETCH_DATA_SUCCESS':
            return null;
        default:
            return state;
    }
}


const data = combineReducers({
    result,
    isFetching,
    errorMessage
});

export default data;

//Selectors
export const getResult = (state, resource) => state.data.result[resource] || {};

export const getIsFetching = (state) => state.data.isFetching;

export const getErrorMessage = (state) => state.data.errorMessage;
