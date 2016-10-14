import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';

it('renders text', () => {
    const wrapper = shallow(<Hello text="aaa"/>)
    expect(wrapper.text()).toContain('Hello');
})
