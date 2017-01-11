import React from 'react';
import { connect } from 'react-redux';
import History from '../components/History';
import { getFilter, getResult, getIsFetching, getErrorMessage } from '../reducers/History';
import * as actions from '../actions';

class HistoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start: props.start,
            end: props.end
        }
    }

    componentDidMount() {
        this.props.setMainTitle('History');
        this.fetchData();
    }

    fetchData = () => {
        const { start, end } = this.state;
        if (start && end) {
            this.props.fetchHistory(start, end);
        }
    }

    changeFilter = (dateField, dateValue) => {
        this.setState({
            [dateField]: dateValue
        })
        this.fetchData()
    }

    render() {
        const { start, end } = this.state;
        const { result, isFetching, errorMessage } = this.props;
        return <History
                    start={start}
                    end={end}
                    result={result}
                    isFetching={isFetching}
                    errorMessage={errorMessage}
                    onRetry={this.fetchData}
                    onDateChange={this.changeFilter}/>

    }
}

const mapStateToProps = (state) => {
    const filter = getFilter(state);
    return {
        start: filter.start,
        end: filter.end,
        isFetching: getIsFetching(state),
        errorMessage: getErrorMessage(state),
        result: getResult(state)
    }
};

HistoryContainer = connect(
    mapStateToProps,
    actions
)(HistoryContainer);


export default HistoryContainer;
