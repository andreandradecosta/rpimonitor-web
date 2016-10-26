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

function RightMenu(props) {
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
    );
}

RightMenu.muiName = 'IconMenu';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        pickerHeaderColor: indigo500
    }
})

function LeftMenu({onMenuClick}) {
    return (
        <Menu>
            <MenuItem containerElement={<Link to="/" />} onTouchTap={onMenuClick}>Status</MenuItem>
            <MenuItem containerElement={<Link to="snapshot" />} onTouchTap={onMenuClick}>Snapshot</MenuItem>
            <MenuItem onTouchTap={onMenuClick}>History</MenuItem>
            <MenuItem onTouchTap={onMenuClick}>Control</MenuItem>
        </Menu>
    );
}


export default class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            drawer: {
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

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                            showMenuIconButton={true}
                            title="My Raspberry Pi Monitor"
                            iconElementRight={<RightMenu />}
                            onLeftIconButtonTouchTap={() => this.handleDrawer(true)}/>
                    <Drawer
                            docked={false}
                            open={this.state.drawer.open}
                            onRequestChange={(open) => this.handleDrawer(open)}>
                        <LeftMenu onMenuClick={() => this.handleDrawer(false)}/>
                    </Drawer>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}
