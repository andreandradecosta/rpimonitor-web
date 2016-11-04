import React from 'react';
import Status from './Status';
import { shallow } from 'enzyme';
import LinearProgress from 'material-ui/LinearProgress';

describe('<Status />', () => {

    it('should render loading indicator', () => {
        const wrapper = shallow(<Status isLoading={true}/>);
        expect(wrapper.contains(<LinearProgress />)).toBeTruthy();
    });

    it('should render data', () => {
        const wrapper = shallow(<Status isLoading={false} data={{}}/>);
        expect(wrapper.contains(<LinearProgress />)).toBeFalsy();
        expect(wrapper.find('div').children().length).toBeGreaterThan(0);
    });

});
