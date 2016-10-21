import React from 'react';
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

export default Snapshot;
