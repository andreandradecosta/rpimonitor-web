import React from 'react';
import { shallow } from 'enzyme';
import Status from '../Status';

describe('<Status />', () => {

    it('should handle undefined', () => {
        const wrapper = shallow(<Status/>);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div').children().length).toBe(0);
    });

    it('should handle empty data', () => {
        const wrapper = shallow(<Status data={{}}/>);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div').children().length).toBe(0);
    });

    it('should render with missing data', () => {
        const data = {
          "localTime": "2016-10-11T13:30:02.306075827-03:00",
          "metrics": {
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
      const wrapper = shallow(<Status data={data}/>);
      expect(wrapper.find('div').children().length).toBe(4);

    });

});
