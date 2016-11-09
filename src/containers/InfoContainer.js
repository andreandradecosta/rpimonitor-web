import React from 'react';
import { connect } from 'react-redux';
import Status from '../components/Status';
import Snapshot from '../components/Snapshot';
import InfoPanel from '../components/InfoPanel';
import * as actions from '../actions';
import { getResult, getIsFetching, getErrorMessage } from '../reducers/Info';

const InfoContainer = (resource, InfoComponent) => {

    var BaseContainer = class extends React.Component {

        componentDidMount() {
            this.fetchInfo();
        }

        fetchInfo() {
            this.props.fetchInfo(resource);
        }

        render() {
            const { isFetching, result, errorMessage } = this.props;
            return (
                <InfoPanel
                    isFetching={isFetching}
                    errorMessage={errorMessage}
                    onRetry={() => this.fetchInfo()}>
                        <InfoComponent
                            data={result} />
                </InfoPanel>
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
