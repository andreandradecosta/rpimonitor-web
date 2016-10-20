import ReactDOM from 'react-dom';
import routes from './config/routes';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    routes,
    document.getElementById('root')
);
