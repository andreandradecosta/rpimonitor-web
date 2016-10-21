import React, { PropTypes } from 'react';
import { puke } from '../helpers/utils';


function Snapshot(props) {
    console.log(props);
    return props.isLoading === true ?
            <p>Loading</p> :
            (
                <div>
                    <p>Server Snapshot</p>
                    <div>{puke(props.data)}</div>
                </div>
            )
}

Snapshot.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
}

export default Snapshot;
