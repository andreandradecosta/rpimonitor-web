import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';


const RightMenu = ({ isAuthenticated, userInfo, iconStyle, onAboutClick, onSignOutClick }) => {
    const LoginMenu = isAuthenticated ?
            <MenuItem primaryText="Sign out" onTouchTap={onSignOutClick}/> :
            <MenuItem primaryText="Login" containerElement={<Link to="login" />}/>
    return (
        <IconMenu
            iconStyle={iconStyle}
            iconButtonElement={
                <IconButton><MoreVertIcon/></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
            <MenuItem primaryText="About" onTouchTap={onAboutClick}/>
            {LoginMenu}
        </IconMenu>
    )
};

RightMenu.muiName = 'IconMenu';

export default RightMenu;
