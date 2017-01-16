import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { loginContainerStyle, loginBoxStyle, loginFormStyle, loginItensStyle } from '../styles';

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
            <div style={loginContainerStyle}>
                <Paper style={loginBoxStyle}>
                    <h3 style={loginItensStyle}>{errorMessage}</h3>
                    <form onSubmit={this.handleSubmit} style={loginFormStyle}>
                        <TextField
                            floatingLabelText="User Name"
                            value={this.state.username}
                            name="username"
                            onChange={this.handleInput}
                            style={loginItensStyle} />
                        <TextField
                            floatingLabelText="Password"
                            type="password"
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInput}
                            style={loginItensStyle} />
                        <RaisedButton label="Submit"
                            primary={true}
                            type="submit"
                            style={loginItensStyle} />
                    </form>
                </Paper>
            </div>
        );
    }

}
