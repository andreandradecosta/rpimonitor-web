import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';


describe('<About />', () =>{

    it('shows "dev" as version', () => {
        const wrapper = shallow(<About />);
        expect(wrapper.find('Dialog').prop('title')).toEqual('My Raspberry Pi Monitor - dev');
    })
});
