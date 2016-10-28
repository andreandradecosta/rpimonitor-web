import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import { changeRange } from '../actions';

const styles = {
    container: {
        margin: '20px'

    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'start',
        alignItems: 'baseline',
        alignContent: 'flex-start',

    },
    datePicker: {
        marginLeft: '20px',
        marginRight: '20px'
    }
}

const RangeSelectorBar = ({start, end, onDateChange}) => (
    <div style={styles.toolbar}>
        <DatePicker
            floatingLabelText="Start"
            style={styles.datePicker}
            autoOk={true}
            container="inline"
            value={start}
            onChange={(event, date) => onDateChange('start', date)} />
        <DatePicker
            floatingLabelText="End"
            style={styles.datePicker}
            autoOk={true}
            container="inline"
            value={end}
            onChange={(event, date) => onDateChange('end', date)} />
    </div>

);

let History = (props) => (
    <Paper style={styles.container}>
        <RangeSelectorBar {...props}/>
        <h3>Results</h3>
    </Paper>
);

const mapStateToProps = (state) => (
    {
        start: state.historyRange.start,
        end: state.historyRange.end
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onDateChange: (date, value) => dispatch(changeRange(date, value))
    }
);

History = connect(
    mapStateToProps,
    mapDispatchToProps
)(History);

export default History;
