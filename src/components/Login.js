import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        onLoginSubmit: PropTypes.func.isRequired
    }
    state = {
        username: '',
        password: ''
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        this.props.onLoginSubmit(username, password);
    }

    render() {
        const { errorMessage } = this.props
        return (
            <Paper>
                <h3>{errorMessage}</h3>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        floatingLabelText="User Name"
                        value={this.state.username}
                        name="username"
                        onChange={this.handleInput} />
                    <TextField
                        floatingLabelText="Password"
                        type="password"
                        value={this.state.password}
                        name="password"
                        onChange={this.handleInput} />
                    <RaisedButton label="Submit" primary={true} type="submit"/>
                </form>
            </Paper>
        );
    }

}
