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
        const retryMock = jest.fn();
        const wrapper = shallow(<ErrorDialog
            message="Error message"
            onRetry={retryMock}/>);

        wrapper.instance().handleRetry();
        expect(retryMock).toBeCalled();
        expect(wrapper.instance().state.open).toBeFalsy();
    });

    it('should close without retry', () => {
        const retryMock = jest.fn();
        const wrapper = shallow(<ErrorDialog
            message="Error message"
            onRetry={retryMock}/>);

        wrapper.instance().handleClose();
        expect(retryMock).toHaveBeenCalledTimes(0);
        expect(wrapper.instance().state.open).toBeFalsy();

    });

});
