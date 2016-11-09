import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import InfoPanel from './InfoPanel';
import { historyStyles } from '../styles';

const HistoryDatePicker = ({floatingLabelText, value, onChange}) => {
    const dateValue = typeof value === 'undefined'? undefined: new Date(value);
    return (
        <DatePicker
            style={historyStyles.datePicker}
            autoOk={true}
            container="inline"
            firstDayOfWeek={0}
            floatingLabelText={floatingLabelText}
            value={dateValue}
            onChange={onChange} />
    )
};

const RangeSelectorBar = ({start, end, onDateChange}) => (
        <div style={historyStyles.toolbar}>
            <HistoryDatePicker
                floatingLabelText="Start"
                value={start}
                onChange={(event, date) => onDateChange('start', date)} />
            <HistoryDatePicker
                floatingLabelText="End"
                value={end}
                onChange={(event, date) => onDateChange('end', date)} />
        </div>
);

const ResultsPanel = ({isFetching, errorMessage, onRetry, result}) => (
    <InfoPanel
        isFetching={isFetching}
        errorMessage={errorMessage}
        onRetry={onRetry}>
            <h3>Results</h3>
            <p>{isFetching? 'Loading...': ''}</p>
            <table>
                <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Used Memory</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((data, i) =>
                                <tr key={i}>
                                    <td>{data.localTime}</td>
                                    <td>{data.metrics.virtualMemory.usedpercent}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
    </InfoPanel>
);


const History = (props) => (
    <Paper style={historyStyles.container}>
        <RangeSelectorBar {...props} />
        <ResultsPanel {...props} />
    </Paper>
);


export default History;
