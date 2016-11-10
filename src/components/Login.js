import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Login = (props) => (
    <Paper>
        <TextField floatingLabelText="User Name" />
        <TextField floatingLabelText="Password" type="password"/>
        <RaisedButton label="Submit" primary={true}/>
    </Paper>
)

export default Login;
