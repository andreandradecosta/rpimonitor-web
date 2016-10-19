import React, { Component } from 'react';
import { getStatus } from '../helpers/api';
import Status from '../components/Status'

class StatusContainer extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        };
    }

    async componentDidMount() {
        try {
            const status = await getStatus()
            console.log(status);
            this.setState({
                status,
                isLoading: false
            })
        } catch (error) {
            console.warn('Error in StatusContainer', error);
        }

    }

    render() {
        return <Status status={this.state.status} isLoading={this.state.isLoading}/>
    }
}

export default StatusContainer
