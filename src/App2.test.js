import React from 'react';
import { shallow } from 'enzyme';
import App2 from './App2';


it('renders welcome message', () => {
    const welcome = <h1>Welcome to React!</h1>
    const wrapper = shallow(<App2/>);
    expect(wrapper.contains(welcome)).toEqual(true);
})
