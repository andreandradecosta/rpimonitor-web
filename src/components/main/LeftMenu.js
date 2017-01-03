import React, { PropTypes } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { userHeaderStyle } from '../../styles';

const SelectableList = makeSelectable(List);
SelectableList.displayName = 'SelectableList';


class LeftMenu extends React.Component {
    static propTypes = {
        onMenuClick: PropTypes.func.isRequired,
        userInfo: PropTypes.object
    }

    static contextTypes = {
        router: PropTypes.object.isRequired
    }

    itemSelected(value) {
        this.context.router.push(value);
        this.props.onMenuClick();
    }

    render() {
        return (
            <div>
                <div id="user" style={userHeaderStyle}>
                    {this.props.userInfo && this.props.userInfo.login}
                </div>
                <SelectableList
                    onChange={(event, value) => this.itemSelected(value)}
                    value={this.context.router.location.pathname}>
                    <ListItem value="/" primaryText="Status" />
                    <ListItem value="/snapshot" primaryText="Snapshot" />
                    <ListItem value="/history" primaryText="History" />
                    <ListItem value="/control" primaryText="Control" />
                </SelectableList>
            </div>
        )
    }
}
export default LeftMenu;
