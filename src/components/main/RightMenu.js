import React from 'react';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {loginButtonStyle} from '../../styles';

const RightMenu = ({ isAuthenticated, iconStyle, onAboutClick, onSignOutClick }) => {
    const LoginButton = <RaisedButton style={loginButtonStyle} label="Login" containerElement={<Link to="login" />} />;

    const LoggedMenu = <IconMenu
                            iconStyle={iconStyle}
                            iconButtonElement={
                                <IconButton><MoreVertIcon/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}} >
                        <MenuItem primaryText="About" onTouchTap={onAboutClick}/>
                        <MenuItem primaryText="Sign out" onTouchTap={onSignOutClick}/>
                    </IconMenu>;

    return isAuthenticated ? LoggedMenu : LoginButton;
};

RightMenu.muiName = 'IconMenu';

export default RightMenu;
