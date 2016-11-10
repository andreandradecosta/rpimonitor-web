import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ErrorDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    handleRetry() {
        this.handleClose();
        this.props.onRetry();
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={() => this.handleClose()} />,
            <FlatButton
                label="Retry"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => this.handleRetry()} />
        ]

        return (
            <div>
                <Dialog
                    title="Error"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={() => this.handleClose()}>
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