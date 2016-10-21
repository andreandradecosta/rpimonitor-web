import React, { PropTypes } from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import moment from 'moment';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import UserIcon from 'material-ui/svg-icons/action/account-box'
import CPUIcon from 'material-ui/svg-icons/hardware/developer-board';

function StatusDetails(status) {
    return (
            <div>
                <CardHeader
                    title={status.metrics.host.hostname}
                    subtitle={`${status.metrics.host.os}/${status.metrics.host.platform}
                        (${status.metrics.host.kernelVersion})`} />
                <Divider />
                <List>
                    <ListItem
                        disableKeyboardFocus={true}
                        disabled={true}
                        primaryText="Disk"
                        secondaryText={`${status.metrics.diskUsage.usedPercent.toFixed(2)} %`}
                        leftIcon={<StorageIcon />} />
                    <ListItem
                        primaryText="CPU"
                        primaryTogglesNestedList={true}
                        secondaryText={`# ${status.metrics.cpuInfo.length}`}
                        leftIcon={<CPUIcon />}
                        nestedItems={
                            status.metrics.cpuInfo.map((cpu, i) =>
                                <ListItem
                                    disableKeyboardFocus={true}
                                    disabled={true}
                                    key={i}
                                    primaryText={cpu.modelName}
                                    secondaryText={cpu.mhz} />
                            )} />
                    <ListItem
                        primaryText="Users"
                        primaryTogglesNestedList={true}
                        secondaryText={`# ${status.metrics.users.length}`}
                        leftIcon={<UserIcon />}
                        nestedItems={
                            status.metrics.users.map((u, i) =>
                                    <ListItem
                                        disableKeyboardFocus={true}
                                        disabled={true}
                                        key={i}
                                        primaryText={`${u.user}@${u.host}`}
                                        secondaryText={moment.unix(u.started).format()} />
                            )}/>
                </List>
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
        <Card>
            {details}
        </Card>
    )
}

Status.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
}

export default Status;
