import React from 'react';
import { connect } from 'react-redux';
import Status from '../components/Status';
import Snapshot from '../components/Snapshot';
import DataPanel from '../components/DataPanel';
import * as actions from '../actions';
import { getResult, getIsFetching, getErrorMessage } from '../reducers/Data';

const InfoContainer = (resource, InfoComponent) => {

    var BaseContainer = class extends React.Component {

        componentDidMount() {
            this.fetchData();
        }

        fetchData() {
            this.props.fetchData(resource);
        }

        render() {
            const { isFetching, result, errorMessage } = this.props;
            return (
                <DataPanel
                    isFetching={isFetching}
                    errorMessage={errorMessage}
                    onRetry={() => this.fetchData()}>
                        <InfoComponent
                            data={result} />
                </DataPanel>
            )
        }
    };

    const mapStateToProps = (state) => (
        {
            result: getResult(state, resource),
            isFetching: getIsFetching(state),
            errorMessage: getErrorMessage(state)
        }
    );

    return connect(mapStateToProps, actions)(BaseContainer);
}

export const StatusContainer = InfoContainer('status', Status);

export const SnapshotContainer = InfoContainer('snapshot', Snapshot);
