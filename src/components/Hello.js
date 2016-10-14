import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

function Hello({text}) {
    return (
        <div>Hello {text}<RaisedButton>OK</RaisedButton></div>
    );
}

export default Hello;
