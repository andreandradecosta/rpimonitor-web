import React from 'react';
import { mount } from 'enzyme';
import Status from '../Status';
import { muiTheme } from '../../styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

describe('<Status />', () => {

    const mountWithTheme = (node) => mount(
        <MuiThemeProvider muiTheme={muiTheme}>
            {node}
        </MuiThemeProvider>
    );

    const sampleData = {
        "localTime": "2016-10-11T13:30:02.306075827-03:00",
        "metrics": {
            "host": {
                "hostname": "virtualbox",
                "uptime": 390206,
                "bootTime": 1475813196,
                "procs": 308,
                "os": "linux",
                "platform": "debian",
                "platformFamily": "debian",
                "platformVersion": "stretch/sid",
                "kernelVersion": "4.4.0-38-generic",
                "virtualizationSystem": "vbox",
                "virtualizationRole": "guest",
                "hostid": "feb95a4a-069a-4e12-b8c6-1aef30c37dc8"
            },
            "cpuInfo": [
                {
                    "modelName": "Intel(R) Xeon(R) CPU           X5680  @ 3.33GHz",
                },
                {
                    "modelName": "Intel(R) Xeon(R) CPU           X5680  @ 3.33GHz",
                },
            ],
            "diskUsage": {
                "path": "/",
                "fstype": "ext2/ext3",
                "total": 91183341568,
                "free": 76972294144,
                "used": 9555529728,
                "usedPercent": 10.479468687681248,
                "inodesTotal": 5668864,
                "inodesUsed": 441450,
                "inodesFree": 5227414,
                "inodesUsedPercent": 7.78727448744581
            },
            "users": [
                {
                    "user": "andre",
                    "terminal": "pts/3",
                    "host": ":0.0",
                    "started": 1475589745
                }
            ]
        }
    };
    const testCases = [
        {
            title: 'Undefined',
            expected: {
                hostTitle: '',
                hostSubtitle: '',
                diskPercent: '',
                cpus: 0,
                users: 0
            }
        },
        {
            title: 'Empty',
            data: {},
            expected: {
                hostTitle: '',
                hostSubtitle: '',
                diskPercent: '',
                cpus: 0,
                users: 0
            }
        },
        {
            title: 'With Data',
            data: sampleData,
            expected: {
                hostTitle: 'virtualbox',
                hostSubtitle: 'debian (4.4.0-38-generic)',
                diskPercent: '10.479 %',
                cpus: 1,
                users: 1
            }
        }
    ];
    testCases.forEach(testCase => {
        it(`case ${testCase.title}`, () => {
            const wrapper = mountWithTheme(
                <Status data={testCase.data}/>
            );
            expect(wrapper.find(Status).children().length).toBe(4);
            const expected = testCase.expected;
            const statusNode = wrapper.find(Status);

            const hostValues = statusNode.find('Host').find('CardHeader').props();
            expect(hostValues.title).toEqual(expected.hostTitle);
            expect(hostValues.subtitle).toEqual(expected.hostSubtitle);

            const diskValues = statusNode.find('Disk').find('CardHeader').props();
            expect(diskValues.subtitle).toEqual(expected.diskPercent);

            const cpusValues = statusNode.find('CPU').find('List');
            expect(cpusValues.children().length).toBe(expected.cpus);

            const usersValues = statusNode.find('UsersInfo').find('List');
            expect(usersValues.children().length).toBe(expected.users);
        });
    });

});
