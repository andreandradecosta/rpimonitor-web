import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import About from './About';
import RightMenu from './RightMenu';
import { muiTheme, appBarStyle, mainContentStyle } from '../../styles';


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
        this.setState({
            title
        })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar
                            style={appBarStyle}
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
                    <div style={mainContentStyle}>
                        {this.props.children ? React.cloneElement(this.props.children, { setMainTitle: this.setMainTitle }): <div/>}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
