import React, { PropTypes } from 'react';
import { containerStyle, cardStyle } from '../styles';
import { Card, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';


const Uptime = ({daysUptime}) => (
    <Card style={cardStyle}>
        <CardHeader
                title="Uptime"
                subtitle={`${daysUptime} days`} />
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



const Snapshot = ({data = []}) => {
    const { metrics } = data;
    return (
        <div style={containerStyle}>
            {metrics? [
                <Uptime {...metrics} key="uptime"/>,
                <Temperature {...metrics} key="temperature"/>,
                <CPU {...metrics} key="cpu"/>,
                <Load {...metrics} key="load"/>,
                <Memory {...metrics} key="memory"/>,
            ]: []}
        </div>
    );
}

Snapshot.propTypes = {
    data: PropTypes.object,
}

export default Snapshot;
