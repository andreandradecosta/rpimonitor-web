import React from 'react';
import Routes from './config/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import appReducer from './reducers';
import { createStore } from 'redux';


injectTapEventPlugin();

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
    <Provider store={store}>
        <Routes/>
    </Provider>
);

export default App;
