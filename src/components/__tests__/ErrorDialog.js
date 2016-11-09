import React from 'react';
import { shallow } from 'enzyme';
import ErrorDialog from '../ErrorDialog';

describe('<ErrorDialog />', () => {


    it('should render initially open', () => {
        const wrapper = shallow(<ErrorDialog
            message="Error message"
            onRetry={() => {}}/>);
        expect(wrapper.instance().state.open).toBeTruthy();
    });

    it('should call onRetry on handleRetry', () => {
        const myMock = jest.fn();
        const wrapper = shallow(<ErrorDialog
            message="Error message"
            onRetry={myMock}/>);

        wrapper.instance().handleRetry();
        expect(myMock).toBeCalled();
        expect(wrapper.instance().state.open).toBeFalsy();
    });

    it('should close without retry', () => {
        const myMock = jest.fn();
        const wrapper = shallow(<ErrorDialog
            message="Error message"
            onRetry={myMock}/>);

        wrapper.instance().handleClose();
        expect(myMock).toHaveBeenCalledTimes(0);
        expect(wrapper.instance().state.open).toBeFalsy();

    });

});
