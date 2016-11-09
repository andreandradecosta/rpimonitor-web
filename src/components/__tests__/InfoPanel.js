import React from 'react';
import { shallow } from 'enzyme';
import LinearProgress from 'material-ui/LinearProgress';
import InfoPanel from '../InfoPanel';

describe('<InfoPanel />', () => {

    const children = <p>Content</p>

    it('should contains a loading indicator', () => {
        const wrapper = shallow(<InfoPanel
                                    isFetching={true}
                                    onRetry={() => {}}>
                                        {children}
                                </InfoPanel>);
        expect(wrapper.contains(children)).toBeTruthy();
        expect(wrapper.contains(<LinearProgress />)).toBeTruthy();
        expect(wrapper.find('ErrorDialog').length).toBe(0);
    });

    it('should contains error dialog', () => {
        const wrapper = shallow(<InfoPanel
                                    isFetching={false}
                                    onRetry={() => {}}
                                    errorMessage="Error Message">
                                        {children}
                                </InfoPanel>);
        expect(wrapper.contains(children)).toBeTruthy();
        expect(wrapper.contains(<LinearProgress />)).toBeFalsy();
        expect(wrapper.find('ErrorDialog').length).toBe(1);
    });

    it('should contains only the children', () => {
        const wrapper = shallow(<InfoPanel
                                    isFetching={false}
                                    onRetry={() => {}}>
                                        {children}
                                </InfoPanel>);
        expect(wrapper.contains(children)).toBeTruthy();
        expect(wrapper.contains(<LinearProgress />)).toBeFalsy();
    });
});
