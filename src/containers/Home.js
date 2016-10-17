import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import HelloContainer from './HelloContainer';




function Menu(props) {
    return (
        <IconMenu
            {...props}
            iconButtonElement={
                <IconButton><MoreVertIcon/></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="About" />
            <MenuItem primaryText="Sign out" />
        </IconMenu>
    )
}

Menu.muiName = 'IconMenu';

class Home extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="My Raspberry Pi Monitor"
                    iconElementRight={<Menu/>}/>
                <HelloContainer/>
            </div>
        )
    }
}

export default Home;
