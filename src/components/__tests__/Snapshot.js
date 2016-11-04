import React from 'react';
import { shallow } from 'enzyme';
import Snapshot from '../Snapshot';
import LinearProgress from 'material-ui/LinearProgress';


describe('<Snapshot />', () => {

    it('should render loading indicator', () => {
        const wrapper = shallow(<Snapshot isLoading={true} />);
        expect(wrapper.contains(<LinearProgress />)).toBeTruthy();
    });

    it('should render data', () => {
        const wrapper = shallow(<Snapshot isLoading={false} data={{}} />);
        expect(wrapper.contains(<LinearProgress />)).toBeFalsy();
        expect(wrapper.find('div').children().length).toBeGreaterThan(0);
    });

});
