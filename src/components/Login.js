import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Login extends React.Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        onLoginSubmit: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput(field, event) {
        this.setState({
            [field]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        this.props.onLoginSubmit(username, password);
    }

    render() {
        const { errorMessage } = this.props
        return (
            <Paper>
                <h3>{errorMessage}</h3>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <TextField
                        floatingLabelText="User Name"
                        value={this.state.username}
                        onChange={(event) => this.handleInput('username', event)} />
                    <TextField
                        floatingLabelText="Password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) => this.handleInput('password', event)} />
                    <RaisedButton label="Submit" primary={true} type="submit"/>
                </form>
            </Paper>
        );
    }

}
