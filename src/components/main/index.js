import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import About from './About';
import RightMenu from './RightMenu';
import LeftMenu from './LeftMenu';
import { muiTheme, appBarStyle, mainContentStyle } from '../../styles';




export default class Main extends React.Component {
    static propTypes = {
        onSignOut: PropTypes.func.isRequired
    }

    state = {
        drawer: {
            open: false
        },
        about: {
            open: false
        },
        title: 'My Raspberry Pi Monitor'
    }

    closeDrawer = () => {
        this.setState({
            drawer: {
                open: false
            }
        })
    }
    openDrawer = () => {
        this.setState({
            drawer: {
                open: true
            }
        })
    }

    openAbout = () => {
        this.setState({
            about: {
                open: true
            }
        })
    }

    handleDrawer = (open) => {
        if (open) {
            this.openDrawer();
        } else {
            this.closeDrawer();
        }
    }

    closeAbout = () => {
        this.setState({
            about: {
                open: false
            }
        })
    }

    setMainTitle = (title) => {
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
                                                onAboutClick={this.openAbout}
                                                onSignOutClick={this.props.onSignOut}/>}
                            onLeftIconButtonTouchTap={this.openDrawer}/>
                    <Drawer
                            docked={false}
                            open={this.state.drawer.open}
                            onRequestChange={this.handleDrawer}>
                        <LeftMenu {...this.props} onMenuClick={this.closeDrawer}/>
                    </Drawer>
                    <About open={this.state.about.open} onClose={this.closeAbout} />
                    <div style={mainContentStyle}>
                        {this.props.children ? React.cloneElement(this.props.children, { setMainTitle: this.setMainTitle }): <div/>}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
