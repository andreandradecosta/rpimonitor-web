import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const About = ({onClose, open}) => {
    const closeButton = <FlatButton
        label="Close"
        primary={true}
        onTouchTap={onClose}
        keyboardFocused={true}/>
    return  (
        <Dialog
            title="About"
            modal={false}
            open={open}
            onRequestClose={onClose}
            actions={closeButton}>
                <div>
                    <h1>Methods</h1>
                    <h3>/auth</h3>
                    <p>Login with [login] and [password].</p>
                    <h3>/api/status</h3>
                    <p>Base Machine Info: CPU, disk usage, disk partitions, host, users.</p>
                    <h3>/api/snapshot</h3>
                    <p>Current metrics values</p>
                    <h3>/api/history?start=YYYY-MM-DD&end=YYYY-MM-DD</h3>
                    <p>Metrics history</p>
                </div>
        </Dialog>
    )
}

export default About;
