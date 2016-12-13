import React from 'react';
import Routes from './config/Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

injectTapEventPlugin();

const App = ({ store }) => (
    <Provider store={store}>
        {Routes}
    </Provider>
);

export default App;
