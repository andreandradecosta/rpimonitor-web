import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import { indigo500, indigo700} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        pickerHeaderColor: indigo500
    }
})

class Home extends Component {
    constructor() {
        super();
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
                        title="My Raspberry Pi Monitor"
                        iconElementRight={<Menu/>}
                        onLeftIconButtonTouchTap={() => this.handleDrawer(true)}/>
                    <Drawer
                        docked={false}
                        open={this.state.drawer.open}
                        onRequestChange={(open) => this.handleDrawer(open)}>
                            <MenuItem containerElement={<Link to="/" />} onTouchTap={() => this.handleDrawer(false)}>Status</MenuItem>
                            <MenuItem containerElement={<Link to="snapshot" />} onTouchTap={() => this.handleDrawer(false)}>Snapshot</MenuItem>
                            <MenuItem onTouchTap={() => this.handleDrawer(false)}>History</MenuItem>
                            <MenuItem onTouchTap={() => this.handleDrawer(false)}>Control</MenuItem>
                    </Drawer>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Home;
