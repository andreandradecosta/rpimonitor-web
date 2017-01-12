import React from 'react';
import { shallow } from 'enzyme';
import Snapshot from '../Snapshot';


describe('<Snapshot />', () => {

    const setMainTitle = jest.fn();

    it('should handle undefined', () => {
        const wrapper = shallow(<Snapshot setMainTitle={setMainTitle}/>);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div').children().length).toBe(1);
    });

    it('should handle empty data', () => {
        const wrapper = shallow(<Snapshot data={{}} setMainTitle={setMainTitle}/>);
        expect(wrapper.find('div').length).toBe(1);
        expect(wrapper.find('div').children().length).toBe(1);
    });

    it('should render with missing data', () => {
        const data = {
          "localTime": "2016-10-11T13:29:41.287966411-03:00",
          "timestamp": 1476203381,
          "metrics": {
            "cpuTimes": [
              {
                "cpu": "cpu-total",
                "user": 11784.93,
                "system": 2299.07,
                "idle": 3.09669401e+06,
                "nice": 194.26,
                "iowait": 767.98,
                "irq": 0,
                "softirq": 170.27,
                "steal": 0,
                "guest": 0,
                "guestNice": 0,
                "stolen": 0
              }
            ],
            "daysUptime": 4,
            "load": {
              "load1": 0.16,
              "load5": 0.12,
              "load15": 0.04
            },
            "swapMemory": {
              "total": 16775114752,
              "used": 0,
              "free": 16775114752,
              "usedPercent": 0,
              "sin": 0,
              "sout": 0
            },
            "temperature": "-",
          }
      };
      const wrapper = shallow(<Snapshot data={data} setMainTitle={setMainTitle}/>)
      expect(wrapper.find('div').length).toBe(1);
      expect(wrapper.find('div').children().length).toBe(6);
    });

});
