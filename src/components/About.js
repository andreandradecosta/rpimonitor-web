import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { StatusContainer } from '../containers/InfoContainer';


const About = ({onClose, open = false}) => {
    const closeButton = <FlatButton
        label="Close"
        primary={true}
        onTouchTap={onClose}
        keyboardFocused={true}/>
    const title = `My Raspberry Pi Monitor - ${process.env.REACT_APP_HASH || 'dev'}`;
    return  (
        <Dialog
            title={title}
            modal={false}
            open={open}
            onRequestClose={onClose}
            actions={closeButton}
            autoScrollBodyContent={true}
            repositionOnUpdate={true}>
                <StatusContainer/>
        </Dialog>
    )
}

export default About;
