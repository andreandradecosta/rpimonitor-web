import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import { Link } from 'react-router';


export default ({ onMenuClick }) => (
    <Menu>
        <MenuItem containerElement={<Link to="/" />} onTouchTap={onMenuClick}>Status</MenuItem>
        <MenuItem containerElement={<Link to="snapshot" />} onTouchTap={onMenuClick}>Snapshot</MenuItem>
        <MenuItem containerElement={<Link to="history"/>} onTouchTap={onMenuClick}>History</MenuItem>
        <MenuItem onTouchTap={onMenuClick}>Control</MenuItem>
    </Menu>
);
