import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

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

function RangeSelectorBar() {
    return (
        <div style={styles.toolbar}>
            <DatePicker
                floatingLabelText="Start"
                style={styles.datePicker}
                autoOk={true}
                container="inline"/>
            <DatePicker
                floatingLabelText="End"
                style={styles.datePicker}
                autoOk={true}
                container="inline"/>
        </div>

    )
}

function History(props) {
    return (
        <Paper style={styles.container}>
            <RangeSelectorBar />
            <h3>Results</h3>
        </Paper>
    );
}

export default History;
