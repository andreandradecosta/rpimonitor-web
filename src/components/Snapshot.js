import React, { PropTypes } from 'react';
import { containerStyle, cardStyle, fabStyle } from '../styles';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';

const Uptime = ({daysUptime, timestamp}) => (
    <Card style={cardStyle}>
        <CardHeader
                title="Uptime"
                subtitle={`${daysUptime} days`} />
            <CardText>
                <div style={{textAlign:'right'}}>{new Date(timestamp * 1000).toLocaleString()}</div>
            </CardText>
    </Card>
);

const CPU = ({cpuTimes}) => (
    <Card style={cardStyle}>
        <CardHeader title="CPU Times" />
        <List>
            <ListItem primaryText="User" secondaryText={cpuTimes[0].user.toLocaleString()} />
            <ListItem primaryText="System" secondaryText={cpuTimes[0].system.toLocaleString()} />
            <ListItem primaryText="Idle" secondaryText={cpuTimes[0].idle.toLocaleString()} />
        </List>
    </Card>
);

const Load = ({load}) => (
    <Card style={cardStyle}>
        <CardHeader title="Load" />
        <List>
            <ListItem primaryText="1" secondaryText={load.load1.toLocaleString()} />
            <ListItem primaryText="5" secondaryText={load.load5.toLocaleString()} />
            <ListItem primaryText="15" secondaryText={load.load15.toLocaleString()} />
        </List>
    </Card>
);

const Temperature = ({temperature}) => (
    <Card style={cardStyle}>
        <CardHeader
                title="Temperature"
                subtitle={`${temperature} ᵒC`} />
    </Card>
);


const gb = 1024 * 1000 * 1000;

const Memory = ({virtualMemory}) => (
    <Card style={cardStyle}>
        <CardHeader title="Memory" />
        <List>
            <ListItem primaryText="Total" secondaryText={(virtualMemory.total/gb).toFixed()} />
            <ListItem primaryText="Available" secondaryText={(virtualMemory.available/gb).toFixed()} />
            <ListItem primaryText="Used" secondaryText={`${virtualMemory.usedPercent.toLocaleString({style: 'percent'})} %`} />
        </List>
    </Card>
);

export default class Snapshot extends React.Component {
    static propTypes = {
        data: PropTypes.object,
        setMainTitle: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setMainTitle('Snapshot');
    }

    render() {
        const { metrics, timestamp } = this.props.data || [];
        return (
            <div style={containerStyle}>
                {metrics? [
                    <Uptime {...metrics} timestamp={timestamp} key="uptime"/>,
                    <Temperature {...metrics} key="temperature"/>,
                    <CPU {...metrics} key="cpu"/>,
                    <Load {...metrics} key="load"/>,
                    <Memory {...metrics} key="memory"/>,
                ]: []}
                <FloatingActionButton onClick={this.props.onRetry} style={fabStyle}>
                    <NavigationRefresh/>
                </FloatingActionButton>
            </div>
        );
    }
}
