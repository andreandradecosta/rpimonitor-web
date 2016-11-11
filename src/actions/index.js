import * as api from '../helpers/api';
import * as storage from '../helpers/storage'
import { getToken } from '../reducers/Auth';

export const login = (username, password) => (dispatch) => {
    dispatch({
        type: 'LOGIN_REQUEST'
    });
    return api.login(username, password).then(
        result => {
            storage.saveToken(result.token);
            return dispatch({
                type: 'LOGIN_SUCCESS',
                token: result.token
            });
        },
        error => dispatch({
                    type: 'LOGIN_FAILURE',
                    errorMessage: error.message
                })
    )
}

export const logout = () => {
    storage.removeToken();
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
