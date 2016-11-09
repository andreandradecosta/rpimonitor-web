import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import ErrorDialog from './ErrorDialog';

const InfoPanel = ({ isFetching, errorMessage, onRetry, children }) => (
    <div>
        {isFetching? <LinearProgress mode="indeterminate"/>: <div/>}
        {errorMessage? <ErrorDialog message={errorMessage} onRetry={onRetry}/>: <div/>}
        {children}
    </div>
);

InfoPanel.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    onRetry: PropTypes.func.isRequired
};

export default InfoPanel;
