import React from 'react';
import { shallow } from 'enzyme';
import LinearProgress from 'material-ui/LinearProgress';
import DataPanel from './DataPanel';
import ErrorDialog from './ErrorDialog';

describe('<DataPanel />', () => {

    const children = <p>Content</p>
    it('should contains a loading indicator', () => {
        const wrapper = shallow(<DataPanel
                                    isFetching={true}
                                    onRetry={() => {}}>
                                        {children}
                                </DataPanel>);
        expect(wrapper.contains(children)).toBeTruthy();
        expect(wrapper.contains(<LinearProgress />)).toBeTruthy();
        expect(wrapper.contains(<ErrorDialog />)).toBeFalsy();
    });

    it('should contains error dialog', () => {
        const wrapper = shallow(<DataPanel
                                    isFetching={false}
                                    onRetry={() => {}}
                                    errorMessage="Error Message">
                                        {children}
                                </DataPanel>);
        expect(wrapper.contains(children)).toBeTruthy();
        expect(wrapper.contains(<LinearProgress />)).toBeFalsy();
        expect(wrapper.find('ErrorDialog').length).toBe(1);
    });

    it('should contains only the children', () => {
        const wrapper = shallow(<DataPanel
                                    isFetching={false}
                                    onRetry={() => {}}>
                                        {children}
                                </DataPanel>);
        expect(wrapper.contains(children)).toBeTruthy();
        expect(wrapper.contains(<LinearProgress />)).toBeFalsy();
    });
});
