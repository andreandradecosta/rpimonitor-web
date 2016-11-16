import React from 'react';
import { connect } from 'react-redux';
import { getErrorMessage, getIsAuthenticated } from '../reducers/Auth';
import Login from '../components/Login';
import * as actions from '../actions';

class LoginContainer extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired

    }

    handleLogin(username, password) {
        this.props.login(username, password).then(
            () => {
                this.context.router.replace(this.props.location.query.redirectTo || '/');
            },
            (err) => {
                console.debug(err);
            }
        );
    }

    render() {
        return <Login
                    {...this.props}
                    onLoginSubmit={(username, password) => this.handleLogin(username, password)}/>
    }
}

const mapStateToProps = (state) => (
    {
        errorMessage: getErrorMessage(state),
        isAuthenticated: getIsAuthenticated(state)
    }
)

export default connect(mapStateToProps, actions)(LoginContainer);
