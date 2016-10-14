import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import HelloContainer from './HelloContainer';


class Home extends Component {
    render() {
        return (
            <div>
                <AppBar
                    title="My Raspberry Pi Monitor"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                <HelloContainer/>
            </div>
        )
    }
}

export default Home;
