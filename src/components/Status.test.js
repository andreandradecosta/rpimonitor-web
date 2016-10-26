import React from 'react';
import Status from './Status';
import { shallow } from 'enzyme';
import LinearProgress from 'material-ui/LinearProgress';
import { Card } from 'material-ui/Card';

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
        expect(wrapper.contains(<LinearProgress />)).toBeTruthy();
    });

    it('should display list with data', () => {
        const wrapper = shallow(<Status isLoading={false} data={status}/>);
        expect(wrapper.contains(<LinearProgress />)).toBeFalsy();
        expect(wrapper.find(Card).length).toBe(4);
        expect(wrapper.find({title: 'Disk'}).prop('subtitle')).toEqual('20.22 %');
    });

});
