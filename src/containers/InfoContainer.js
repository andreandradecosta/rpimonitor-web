import React from 'react';
import { getData } from '../helpers/api';

const InfoContainer = (resource, InfoComponent) =>
    class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                isLoading: true,
                data: {}
            }
        }

        async componentDidMount() {
            try {
                const data = await getData(resource);
                this.setState({
                    data,
                    isLoading: false
                })
            } catch (err) {
                console.warn('Error in InfoContainer', err);
            }
        }

        render() {
            return <InfoComponent
                        isLoading={this.state.isLoading}
                        data={this.state.data} />
        }
    };


export default InfoContainer;
