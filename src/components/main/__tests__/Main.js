import React from 'react';
import { shallow } from 'enzyme';
import Main from '../';
import LeftMenu from '../LeftMenu';
import About from '../About';

describe('<Main />', () => {
    const signOutMock = jest.fn();
    const wrapper = shallow(<Main onSignOut={signOutMock}/>)

    it('renders controls', () => {
        expect(wrapper.find('AppBar').props().iconElementRight).toBeDefined();
        expect(wrapper.find(LeftMenu).length).toEqual(1);
    });

    it('initially shows drawer hidden', () => {
        expect(wrapper.find('Drawer').prop('open')).toBeFalsy();
    });

    it('shows drawer when clicked on navigation button', () => {
        wrapper.instance().openDrawer();
        expect(wrapper.find('Drawer').prop('open')).toBeTruthy();
    });

    it('closes drawer when clicked on menu', () => {
        wrapper.instance().closeDrawer();
        expect(wrapper.find('Drawer').prop('open')).toBeFalsy();
    });

    it('About is initially closed', () => {
        expect(wrapper.find(About).prop('open')).toBeFalsy();
    });

    it('shows about when clicked on menu', () => {
        wrapper.instance().openAbout();
        expect(wrapper.find(About).prop('open')).toBeTruthy();
    });
});
