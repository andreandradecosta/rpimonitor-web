import React from 'react';
import { mount } from 'enzyme';
import Main from '../Main';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

describe('<Main />', () => {
    const signOutMock = jest.fn();
    const wrapper = mount(<Main onSignOut={signOutMock}/>)

    it('initially shows drawer hidden', () => {
        expect(wrapper.find('Drawer').prop('open')).toBeFalsy();
    });

    it('shows drawer when clicked on navigation button', () => {
        wrapper.find('AppBar').prop('onLeftIconButtonTouchTap')();
        expect(wrapper.find('Drawer').prop('open')).toBeTruthy();
    });

    it('closes drawer when clicked on menu', () => {
        wrapper.find('Drawer').find('MenuItem').first().simulate('click');
        expect(wrapper.find('Drawer').prop('open')).toBeTruthy();
    });
});
