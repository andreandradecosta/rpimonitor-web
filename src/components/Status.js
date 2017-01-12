import React, { PropTypes } from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import StorageIcon from 'material-ui/svg-icons/device/storage';
import UserIcon from 'material-ui/svg-icons/action/account-box'
import CPUIcon from 'material-ui/svg-icons/hardware/developer-board';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';
import { resumeItems } from '../helpers/utils';
import { containerStyle, cardStyle} from '../styles';



const Host = ({host = {}}) => (
    <Card style={cardStyle}>
        <CardHeader
            avatar={<ComputerIcon />}
            title={host.hostname || ''}
            subtitle={(host.platform && host.kernelVersion) ? `${host.platform} (${host.kernelVersion})`: ''} />
    </Card>
);
Host.displayName = 'Host';

const Disk = ({diskUsage = {}}) => (
    <Card style={cardStyle}>
        <CardHeader
            avatar={<StorageIcon />}
            title="Disk"
            subtitle={diskUsage.usedPercent? `${diskUsage.usedPercent.toLocaleString({style: 'percent'})} %`: ''} />
    </Card>
);
Disk.displayName = 'Disk';


const CPU = ({cpuInfo = []}) => (
    <Card style={cardStyle} expanded={true}>
        <CardHeader
            avatar={<CPUIcon />}
            title="CPU" />
        <List>
            {
                resumeItems(cpuInfo, 'modelName').map((cpu, i) =>
                    <ListItem
                        disableKeyboardFocus={true}
                        disabled={true}
                        key={i}
                        primaryText={cpu.value}
                        secondaryText={`# ${cpu.count}`} />
                )
            }
        </List>
    </Card>
);
CPU.displayName = 'CPU';

const UsersInfo = ({users = []}) => (
    <Card style={cardStyle} expanded={true}>
        <CardHeader
            avatar={<UserIcon />}
            title="Users" />
            <List>
                {
                    resumeItems(users, 'user').map((u, i) =>
                        <ListItem
                        disableKeyboardFocus={true}
                        disabled={true}
                        key={i}
                        primaryText={`${u.value}`}
                        secondaryText={`# ${u.count}`} />
                    )
                }
            </List>
    </Card>

);
UsersInfo.displayName = 'UsersInfo';

const Status = ({data = {}}) => {
    const {metrics} = data;
    return (
        <div style={containerStyle}>
            <Host {...metrics}/>
            <Disk {...metrics}/>
            <CPU {...metrics} />
            <UsersInfo {...metrics}/>
        </div>
    )
}

Status.propTypes = {
    data: PropTypes.object,
}

export default Status;
