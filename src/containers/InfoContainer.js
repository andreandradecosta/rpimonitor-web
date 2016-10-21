import React from 'react';
import { getData } from '../helpers/api';

export default function InfoContainer(resource, InfoComponent) {
    return React.createClass({
        getInitialState: function() {
            return {
                isLoading: true,
                data: {}
            }
        },

        componentDidMount: async function() {
            try {
                const data = await getData(resource);
                this.setState({
                    data,
                    isLoading: false
                })
            } catch (err) {
                console.warn('Error in InfoContainer', err);
            }
        },

        render: function() {
            return <InfoComponent
                        isLoading={this.state.isLoading}
                        data={this.state.data} />
        }
    })
}
