import React from 'react'
import { connect } from 'react-redux';
import { getIsAuthenticated, getUserInfo } from '../reducers/Auth';
import * as actions from '../actions';
import Main from '../components/main';

class MainContainer extends React.Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    handleSignOut() {
        this.props.logout();
        this.context.router.push('/login');
    }

    render() {
        return <Main
                    {...this.props}
                    onSignOut={() => this.handleSignOut()} />
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: getIsAuthenticated(state),
        userInfo: getUserInfo(state)
    }
)


export default connect(mapStateToProps, actions)(MainContainer);
