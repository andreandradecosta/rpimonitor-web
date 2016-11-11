import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from '../reducers';
import { getToken } from '../helpers/storage';

const configureStore = () => {

    const initialState = {
        auth: {
            token: getToken()
        }
    }

    const middlewares = [thunk];
    let composeEnhancers = compose;
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
        composeEnhancers =
            typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
                compose;
    }

    return createStore(
        appReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middlewares)
        )
    );
}

export default configureStore;
