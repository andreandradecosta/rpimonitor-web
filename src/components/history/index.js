import React from 'react';
import Paper from 'material-ui/Paper';
import { historyStyles } from '../../styles';
import Range from './Range';
import Result from './Result';

const History = (props) => (
    <Paper style={historyStyles.container}>
        <Range {...props} />
        <Result {...props} />
    </Paper>
)

export default History;
