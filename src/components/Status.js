import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import moment from 'moment';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import UserIcon from 'material-ui/svg-icons/action/account-box'
import CPUIcon from 'material-ui/svg-icons/hardware/developer-board';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';


const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px auto'
}

const cardStyle = {
    margin: '10px auto'
}

function StatusDetails(status) {
    return (
            <div style={containerStyle}>
                <Card style={cardStyle}>
                    <CardHeader
                        avatar={<ComputerIcon />}
                        title={status.metrics.host.hostname}
                        subtitle={`${status.metrics.host.os}/${status.metrics.host.platform}
                            (${status.metrics.host.kernelVersion})`} />
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        avatar={<StorageIcon />}
                        title="Disk"
                        subtitle={`${status.metrics.diskUsage.usedPercent.toFixed(2)} %`} />

                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        avatar={<CPUIcon />}
                        title="CPU"
                        subtitle={`# ${status.metrics.cpuInfo.length}`}
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardText expandable={true}>
                        <List>
                            {
                                status.metrics.cpuInfo.map((cpu, i) =>
                                    <ListItem
                                        disableKeyboardFocus={true}
                                        disabled={true}
                                        key={i}
                                        primaryText={cpu.modelName}
                                        secondaryText={cpu.mhz} />
                                )
                            }
                        </List>
                    </CardText>
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        avatar={<UserIcon />}
                        title="Users"
                        subtitle={`# ${status.metrics.users.length}`}
                        actAsExpander={true}
                        showExpandableButton={true} />
                    <CardText expandable={true}>
                        <List>
                            {
                                status.metrics.users.map((u, i) =>
                                    <ListItem
                                    disableKeyboardFocus={true}
                                    disabled={true}
                                    key={i}
                                    primaryText={`${u.user}@${u.host}`}
                                    secondaryText={moment.unix(u.started).format()} />
                                )
                            }
                        </List>
                    </CardText>
                </Card>
            </div>
    )
}


function Status({isLoading, data}) {
    let details;
    if (isLoading) {
        details = <LinearProgress mode="indeterminate" />
    } else {
        details = StatusDetails(data)
    }
    return (
        <div>
            {details}
        </div>
    )
}

Status.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
}

export default Status;
