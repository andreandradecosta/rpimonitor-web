import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ErrorDialog extends React.Component {
    state = {
        open: true
    }

    close = () => {
        this.setState({
            open: false
        })
    }

    retry = () => {
        this.close();
        this.props.onRetry();
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.close} />,
            <FlatButton
                label="Retry"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.retry} />
        ]

        return (
            <div>
                <Dialog
                    title="Error"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.close}>
                        <p>{this.props.message}</p>
                </Dialog>
            </div>
        )
    }
};

ErrorDialog.propTypes = {
    message:  PropTypes.string.isRequired,
    onRetry: PropTypes.func.isRequired
}
