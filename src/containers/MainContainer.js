import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import { indigo500, indigo700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import About from '../components/About';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../reducers/Auth';
import * as actions from '../actions';

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

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        pickerHeaderColor: indigo500
    }
})

const LeftMenu = ({onMenuClick}) => (
    <Menu>
        <MenuItem containerElement={<Link to="/" />} onTouchTap={onMenuClick}>Status</MenuItem>
        <MenuItem containerElement={<Link to="snapshot" />} onTouchTap={onMenuClick}>Snapshot</MenuItem>
        <MenuItem containerElement={<Link to="history"/>} onTouchTap={onMenuClick}>History</MenuItem>
        <MenuItem onTouchTap={onMenuClick}>Control</MenuItem>
    </Menu>
);



class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drawer: {
                open: false
            },
            about: {
                open: false
            }
        }
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

    handleSignOut() {
        this.props.logout();
        this.context.router.push('/login');
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                            showMenuIconButton={true}
                            title="My Raspberry Pi Monitor"
                            iconElementRight={<RightMenu {...this.props}
                                                onAboutClick={() => this.handleAbout(true)}
                                                onSignOutClick={() => this.handleSignOut()}/>}
                            onLeftIconButtonTouchTap={() => this.handleDrawer(true)}/>
                    <Drawer
                            docked={false}
                            open={this.state.drawer.open}
                            onRequestChange={(open) => this.handleDrawer(open)}>
                        <LeftMenu onMenuClick={() => this.handleDrawer(false)}/>
                    </Drawer>
                    <About open={this.state.about.open} onClose={() => this.handleAbout(false)} />
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = (state) => (
    {
        isAuthenticated: getIsAuthenticated(state)
    }
)

MainContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

MainContainer = connect(mapStateToProps, actions)(MainContainer)


export default MainContainer;
