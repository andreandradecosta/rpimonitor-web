import React from 'react';
import { shallow } from 'enzyme';
import LeftMenu from '../LeftMenu';

describe('<LeftMenu />', () => {

    const menuClickMock = jest.fn();
    const router = {
        location: {
                pathname: '/'
        },
        push: () => {}
    }

    it('set selected item based on current path', () => {
        const wrapper = shallow(<LeftMenu onMenuClick={menuClickMock}/>, {context: {router}});
        expect(wrapper.find('SelectableList').props().value).toEqual('/');
    });

    it('change location on itemSelected', () => {
        const wrapper = shallow(<LeftMenu onMenuClick={menuClickMock}/>, { context: {router}});
        wrapper.instance().itemSelected('/snapshot');
        expect(menuClickMock).toHaveBeenCalled();
    });

    it('doesnt break with invalid path', () => {
        router.location.pathname = '/invalid';
        const wrapper = shallow(<LeftMenu onMenuClick={menuClickMock}/>, { context: {router}});
        expect(wrapper.find('SelectableList').props().value).toEqual('/invalid');
    });

    it('ignores empty userInfo', () => {
        const wrapper = shallow(<LeftMenu onMenuClick={menuClickMock}/>, {context: {router}});
        expect(wrapper.find('#user').text()).toEqual('');
    });

    it('renders userInfo', () => {
        const userInfo = {
            login: 'user',
            name: 'User Name'
        };
        const wrapper = shallow(<LeftMenu
                                    userInfo={userInfo}
                                    onMenuClick={menuClickMock}/>,
                                {context: {router}});
        expect(wrapper.find('#user').text()).toEqual('user');
    });

});
