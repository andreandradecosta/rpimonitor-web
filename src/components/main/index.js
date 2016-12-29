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
