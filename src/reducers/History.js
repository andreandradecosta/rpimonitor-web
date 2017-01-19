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
            return action.errorMessage;
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
export const getFilter = (state) => state.history.filter

export const getResult = (state) => state.history.result;

export const getIsFetching = (state, start, end) => state.history.isFetching;

export const getErrorMessage = (state, start, end) => state.history.errorMessage;

export const getVariables = (state) =>
        getResult(state).reduce((variablesAcc, record) => {
            const {metrics} = record;
            const recordVars = Object.keys(metrics).reduce((mKeyAcc, mKeyCurr) => {
                if (typeof metrics[(mKeyCurr)] !== 'object') {
                    return [...mKeyAcc, mKeyCurr]
                }
                const keys = Object.keys(metrics[(mKeyCurr)]).map(k => `${mKeyCurr}.${k}`)
                return [...mKeyAcc, ...keys]
            }, [])
            return [...variablesAcc.filter(i => !recordVars.includes(i)), ...recordVars];
        }, []).sort()


export const getTimeSeries = (state, name, subName) =>
        getResult(state).map(record => {
                const {timestamp} = record;
                const metrics = record.metrics[name];
                const val = subName? metrics[subName]: metrics
                return [timestamp * 1000, val];
        })
