const auth = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                token: null,
                isFetching: true,
                errorMessage: null
            };
        case 'LOGIN_SUCCESS':
            return {
                token: action.token,
                isFetching: false,
                errorMessage: null
            };
        case 'LOGIN_FAILURE':
            return {
                token: null,
                isFetching: false,
                errorMessage: action.errorMessage
            };
        case 'LOGOUT_SUCCESS':
            return {
                token: null,
                isFetching: false,
                errorMessage: null
            }
        default:
            return state;
    }
}

export default auth;

export const getToken = (state) => state.auth.token;

export const getIsAuthenticated = (state) => getToken(state) ? true: false;

export const getIsFetching = (state) => state.auth.isFetching;

export const getErrorMessage = (state) => state.auth.errorMessage;
