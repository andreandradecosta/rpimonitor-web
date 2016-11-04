import React, { PropTypes } from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import ErrorDialog from './ErrorDialog';

const DataPanel = ({ isFetching, errorMessage, onRetry, children }) => (
    <div>
        {isFetching? <LinearProgress mode="indeterminate"/>: <div/>}
        {errorMessage? <ErrorDialog message={errorMessage} onRetry={onRetry}/>: <div/>}
        {children}
    </div>
);

DataPanel.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    onRetry: PropTypes.func.isRequired
};

export default DataPanel;
