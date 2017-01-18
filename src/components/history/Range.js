import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import { historyStyles } from '../../styles';


const HistoryDatePicker = ({floatingLabelText, value, onChange}) => {
    const dateValue = typeof value === 'undefined'? undefined: new Date(value);
    return (
        <DatePicker
            style={historyStyles.field}
            autoOk={true}
            firstDayOfWeek={0}
            floatingLabelText={floatingLabelText}
            value={dateValue}
            onChange={onChange} />
    )
};

const Range = ({start, end, onDateChange}) => (
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

export default Range;
