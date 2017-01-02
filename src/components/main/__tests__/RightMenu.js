import React from 'react';
import { shallow } from 'enzyme';
import RightMenu from '../RightMenu';


describe('<RightMenu />', ()=> {
    it('renders without authentication', () => {
        const wrapper = shallow(<RightMenu/>);
        expect(wrapper.find('RaisedButton').props().label).toEqual('Login')
    });

    it('renders authenticated', () => {
        const wrapper = shallow(<RightMenu isAuthenticated={true}/>);
        expect(wrapper.find('MenuItem').get(1).props.primaryText).toEqual('Sign out')
    });

});
