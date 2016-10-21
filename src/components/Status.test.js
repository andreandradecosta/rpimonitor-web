import React from 'react';
import Status from './Status';
import { shallow } from 'enzyme';
import LinearProgress from 'material-ui/LinearProgress';
import { ListItem } from 'material-ui/List';

describe('<Status />', () => {
    const status = {
        metrics: {
            host: {
                hostname: 'host-name',
                os: 'linux',
                platform: 'debian',
                kernelVersion: '1.0.0'
            },
            cpuInfo: [
                {
                    modelName: 'Intel',
                    mhz: 3325.006
                },
                {
                    modelName: 'Intel',
                    mhz: 3325.006
                },
            ],
            diskUsage: {
                usedPercent:20.22333444
            },
            users: [
              {
                "user": "andre",
                "terminal": "tty7",
                "host": ":0",
                "started": 1475582243
              },
              {
                "user": "andre",
                "terminal": "pts/0",
                "host": ":0.0",
                "started": 1476116666
              }
          ]
        }
    };

    it('should render loading indicator', () => {
        const wrapper = shallow(<Status isLoading={true}/>);
        expect(wrapper.contains(<LinearProgress />)).toBe(true);
    });

    it('should display list with data', () => {
        const wrapper = shallow(<Status isLoading={false} data={status}/>);
        expect(wrapper.contains(<LinearProgress />)).toBe(false);
        expect(wrapper.find(ListItem).length).toBe(3);
        expect(wrapper.find({primaryText: 'Disk'}).prop('secondaryText')).toEqual('20.22 %');
        expect(wrapper.find({primaryText: 'CPU'}).prop('secondaryText')).toEqual('# 2');
        expect(wrapper.find({primaryText: 'CPU'}).prop('nestedItems').length).toEqual(status.metrics.cpuInfo.length);
        expect(wrapper.find({primaryText: 'Users'}).prop('secondaryText')).toEqual('# 2');
        expect(wrapper.find({primaryText: 'Users'}).prop('nestedItems').length).toEqual(status.metrics.users.length);
    });

});
