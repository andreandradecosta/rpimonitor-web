import React from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../reducers/Auth';

class EnsureLoggedInContainer extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object.isRequired

    }

    componentDidMount() {
        if (!this.props.isAuthenticated) {
            this.context.router.push({
                pathname: '/login',
                query: {redirectTo: this.props.location.pathname}
            });
        }
    }

    render() {
        if (this.props.isAuthenticated) {
            return React.cloneElement(this.props.children, { ...this.props });
        }
        return null;
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: getIsAuthenticated(state)
    }
);

export default connect(mapStateToProps)(EnsureLoggedInContainer);
