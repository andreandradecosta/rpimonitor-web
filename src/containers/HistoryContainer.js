import React from 'react';
import { connect } from 'react-redux';
import History from '../components/history';
import * as reducer from '../reducers/History';
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
        const { result, isFetching, errorMessage, variables } = this.props;
        return <History
                    start={start}
                    end={end}
                    result={result}
                    isFetching={isFetching}
                    errorMessage={errorMessage}
                    variables={variables}
                    onRetry={this.fetchData}
                    onDateChange={this.changeFilter}/>

    }
}

const mapStateToProps = (state) => {
    const filter = reducer.getFilter(state);
    return {
        start: filter.start,
        end: filter.end,
        isFetching: reducer.getIsFetching(state),
        errorMessage: reducer.getErrorMessage(state),
        result: reducer.getResult(state),
        variables: reducer.getVariables(state)
    }
};

HistoryContainer = connect(
    mapStateToProps,
    actions
)(HistoryContainer);


export default HistoryContainer;
