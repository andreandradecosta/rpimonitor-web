import * as api from '../helpers/api';
import { getToken } from '../reducers/Auth';

export const logout = () => {
    localStorage.removeItem("token");
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

export const fetchInfo = (resource) => (dispatch, getState) => {
    dispatch({
        type: 'FETCH_INFO_REQUEST',
        resource
    });
    return api.getInfo(resource, getToken(getState())).then(
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

export const fetchHistory = (start, end) => (dispatch, getState) => {
    dispatch({
        type: 'FETCH_HISTORY_REQUEST',
        start,
        end

    });
    return api.getHistory(start, end, getToken(getState())).then(
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
