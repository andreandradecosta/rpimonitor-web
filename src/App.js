import React from 'react';
import Routes from './config/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';

const store = configureStore();

injectTapEventPlugin();

const App = () => (
    <Provider store={store}>
        {Routes}
    </Provider>
);

export default App;
