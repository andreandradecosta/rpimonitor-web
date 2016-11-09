import * as api from '../helpers/api';


export const fetchInfo = (resource) => (dispatch) => {
    dispatch({
        type: 'FETCH_INFO_REQUEST',
        resource
    });
    return api.getInfo(resource).then(
        result => {
            dispatch({
                type: 'FETCH_INFO_SUCCESS',
                resource,
                result
            });
        },
        error => {
            dispatch({
                type: 'FETCH_INFO_FAILURE',
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
