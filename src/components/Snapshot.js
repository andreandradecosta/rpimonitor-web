import React, { PropTypes } from 'react';
import { containerStyle, cardStyle } from '../styles';
import { Card, CardHeader } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';


function Uptime({daysUptime}) {
    return (
        <Card style={cardStyle}>
            <CardHeader
                    title="Uptime"
                    subtitle={`${daysUptime} days`} />
        </Card>
    );
}

function CPU({cpuTimes}) {
    return (
        <Card style={cardStyle}>
            <CardHeader title="CPU Times" />
            <List>
                <ListItem primaryText="User" secondaryText={cpuTimes[0].user.toLocaleString()} />
                <ListItem primaryText="System" secondaryText={cpuTimes[0].system.toLocaleString()} />
                <ListItem primaryText="Idle" secondaryText={cpuTimes[0].idle.toLocaleString()} />
            </List>
        </Card>
    )
}

function Load({load}) {
    return (
        <Card style={cardStyle}>
            <CardHeader title="Load" />
            <List>
                <ListItem primaryText="1" secondaryText={load.load1.toLocaleString()} />
                <ListItem primaryText="5" secondaryText={load.load5.toLocaleString()} />
                <ListItem primaryText="15" secondaryText={load.load15.toLocaleString()} />
            </List>
        </Card>
    )
}

function Temperature({temperature}) {
    return (
        <Card style={cardStyle}>
            <CardHeader
                    title="Temperature"
                    subtitle={`${temperature} ᵒC`} />
        </Card>
    )
}

function Memory({virtualMemory}) {
    const gb = 1024 * 1000 * 1000;
    return (
        <Card style={cardStyle}>
            <CardHeader title="Memory" />
            <List>
                <ListItem primaryText="Total" secondaryText={(virtualMemory.total/gb).toFixed()} />
                <ListItem primaryText="Available" secondaryText={(virtualMemory.available/gb).toFixed()} />
                <ListItem primaryText="Used" secondaryText={`${virtualMemory.usedPercent.toLocaleString({style: 'percent'})} %`} />
            </List>
        </Card>
    )

}


function Snapshot({isLoading, data}) {
    if (isLoading) {
        return <LinearProgress mode="indeterminate" />
    }

    const { metrics } = data;
    return (
        <div style={containerStyle}>
            <Uptime {...metrics} />
            <Temperature {...metrics} />
            <CPU {...metrics} />
            <Load {...metrics} />
            <Memory {...metrics} />
        </div>
    );
}

Snapshot.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
}

export default Snapshot;
