import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import About from './About';
import { muiTheme } from '../styles';

const RightMenu = ({ isAuthenticated, iconStyle, onAboutClick, onSignOutClick }) => {
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


const LeftMenu = ({ onMenuClick }) => (
    <Menu>
        <MenuItem containerElement={<Link to="/" />} onTouchTap={onMenuClick}>Status</MenuItem>
        <MenuItem containerElement={<Link to="snapshot" />} onTouchTap={onMenuClick}>Snapshot</MenuItem>
        <MenuItem containerElement={<Link to="history"/>} onTouchTap={onMenuClick}>History</MenuItem>
        <MenuItem onTouchTap={onMenuClick}>Control</MenuItem>
    </Menu>
);



export default class Main extends React.Component {
    static propTypes = {
        onSignOut: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            drawer: {
                open: false
            },
            about: {
                open: false
            },
            title: 'My Raspberry Pi Monitor'
        }
        this.setMainTitle = this.setMainTitle.bind(this);
    }

    handleDrawer(open) {
        this.setState({
            drawer: {
                open
            }
        })
    }

    handleAbout(open) {
        this.setState({
            about: {
                open
            }
        })
    }

    setMainTitle(title) {
        console.log(this);
        this.setState({
            title
        })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                            showMenuIconButton={true}
                            title={this.state.title}
                            iconElementRight={<RightMenu {...this.props}
                                                onAboutClick={() => this.handleAbout(true)}
                                                onSignOutClick={this.props.onSignOut}/>}
                            onLeftIconButtonTouchTap={() => this.handleDrawer(true)}/>
                    <Drawer
                            docked={false}
                            open={this.state.drawer.open}
                            onRequestChange={(open) => this.handleDrawer(open)}>
                        <LeftMenu onMenuClick={() => this.handleDrawer(false)}/>
                    </Drawer>
                    <About open={this.state.about.open} onClose={() => this.handleAbout(false)} />
                    {this.props.children ? React.cloneElement(this.props.children, { setMainTitle: this.setMainTitle }): <div/>} 
                </div>
            </MuiThemeProvider>
        )
    }
}
