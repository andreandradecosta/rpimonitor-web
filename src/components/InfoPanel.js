import React, { PropTypes } from 'react';
import ErrorDialog from './ErrorDialog';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import {loadingContainerStyle, refreshIndicadorStyle} from '../styles';


const Loading = ({ isFetching }) => (
    <div style={loadingContainerStyle}>
        <div style={refreshIndicadorStyle}>
            <RefreshIndicator
                left={-20}
                top={10}
                status={isFetching? 'loading': 'hide'}/>
        </div>
    </div>
)
Loading.displayName = 'Loading';

const InfoPanel = ({ isFetching, errorMessage, onRetry, children }) => (
    <div>
        <Loading isFetching={isFetching} />
        {errorMessage? <ErrorDialog message={errorMessage} onRetry={onRetry}/>: <div/>}
        { children }
    </div>
);

InfoPanel.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    onRetry: PropTypes.func.isRequired
};

export default InfoPanel;
