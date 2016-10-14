import React, { Component } from 'react';
import Hello from '../components/Hello';
import { getSnapshot } from '../helpers/api';

class HelloContainer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    async componentDidMount() {
        try {
            const snapshot = await getSnapshot()
            this.setState({
                localTime: snapshot.localTime,
                daysUptime: snapshot.daysUptime
            })
        } catch(error) {
            console.warn('Error in HelloContainer', error);
        }
    }

    render() {
        return (
            <Hello text={this.state.localTime}/>
        )
    }
}

export default HelloContainer
