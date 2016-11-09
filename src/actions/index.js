import * as api from '../helpers/api';


export const fetchData = (resource) => (dispatch) => {
    dispatch({
        type: 'FETCH_DATA_REQUEST',
        resource
    });
    return api.getData(resource).then(
        result => {
            dispatch({
                type: 'FETCH_DATA_SUCCESS',
                resource,
                result
            });
        },
        error => {
            dispatch({
                type: 'FETCH_DATA_FAILURE',
                message: `Request error: ${error.message}`
            })
        }
    );
}

export const fetchHistory = (start, end) => (dispatch) => {
    dispatch({
        type: 'FETCH_HISTORY_REQUEST',
        start,
        end

    });
    return api.getHistory(start, end).then(
        result => {
            dispatch({
                type: 'FETCH_HISTORY_SUCCESS',
                result
            });
        },
        error => {
            dispatch({
                type: 'FETCH_HISTORY_FAILURE',
                message: `Request error: ${error.message}.`
            })
        }
    );
}
