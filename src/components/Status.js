import React, { PropTypes } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import UserIcon from 'material-ui/svg-icons/action/account-box'
import CPUIcon from 'material-ui/svg-icons/hardware/developer-board';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';
import { resumeItems } from '../helpers/utils';

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    alignContent: 'flex-start',
    margin: '10px auto'
}

const cardStyle = {
    margin: '10px',
    flexBasis: '300px'
}

function StatusDetails(status) {
    return (
            <div style={containerStyle}>
                <Card style={cardStyle}>
                    <CardHeader
                        avatar={<ComputerIcon />}
                        title={status.metrics.host.hostname}
                        subtitle={`${status.metrics.host.platform} (${status.metrics.host.kernelVersion})`} />
                </Card>
                <Card style={cardStyle}>
                    <CardHeader
                        avatar={<StorageIcon />}
                        title="Disk"
                        subtitle={`${status.metrics.diskUsage.usedPercent.toFixed(2)} %`} />

                </Card>
                <Card style={cardStyle} expanded={true}>
                    <CardHeader
                        avatar={<CPUIcon />}
                        title="CPU" />
                    <CardText expandable={true}>
                        <List>
                            {
                                resumeItems(status.metrics.cpuInfo, 'modelName').map((cpu, i) =>
                                    <ListItem
                                        disableKeyboardFocus={true}
                                        disabled={true}
                                        key={i}
                                        primaryText={cpu.value}
                                        secondaryText={`# ${cpu.count}`} />
                                )
                            }
                        </List>
                    </CardText>
                </Card>
                <Card style={cardStyle} expanded={true}>
                    <CardHeader
                        avatar={<UserIcon />}
                        title="Users" />
                    <CardText expandable={true}>
                        <List>
                            {
                                resumeItems(status.metrics.users, 'user').map((u, i) =>
                                    <ListItem
                                    disableKeyboardFocus={true}
                                    disabled={true}
                                    key={i}
                                    primaryText={`${u.value}`}
                                    secondaryText={`# ${u.count}`} />
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
