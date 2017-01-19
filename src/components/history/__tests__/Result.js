import React from 'react';
import { Result } from '../Result';
import { shallow } from 'enzyme';


describe('<Result />', () => {

    it('renders initially empty', () => {
        const wrapper = shallow(<Result
                                    isFetching={false}
                                    onRetry={jest.fn()}
                                    variables={[]}/>);
        expect(wrapper.state().selectedVar).toBeUndefined();
        expect(wrapper.instance().getVarNames()).toEqual([undefined, undefined]);
        const SelectVar = wrapper.find('SelectVar');
        expect(SelectVar.props().selectedVar).toBeUndefined();
        const SelectField = SelectVar.shallow().find('SelectField');
        expect(SelectField.props().disabled).toBeTruthy();
        expect(SelectField.children().length).toBe(0);
    });

    const variables = [
        'daysUptime',
        'load.load1',
        'load.load15',
        'load.load5',
        'swapMemory.free',
        'swapMemory.total',
        'swapMemory.used',
        'swapMemory.usedpercent',
        'temperature',
        'virtualMemory.active',
        'virtualMemory.writebacktmp'
    ];

    it('renders after data update', () => {

        const wrapper = shallow(<Result
                                    isFetching={false}
                                    onRetry={jest.fn()}
                                    variables={[]}/>);
        wrapper.setProps({variables: variables});
        expect(wrapper.state().selectedVar).toEqual(variables[0]);
        expect(wrapper.instance().getVarNames()).toEqual(['daysUptime']);
        const SelectVar = wrapper.find('SelectVar');
        expect(SelectVar.props().selectedVar).toEqual(variables[0]);
        const SelectField = SelectVar.shallow().find('SelectField');
        expect(SelectField.props().disabled).toBeFalsy();
        expect(SelectField.children().length).toBe(variables.length);
    });

    it('renders with data', () => {

        const wrapper = shallow(<Result
                                    isFetching={false}
                                    onRetry={jest.fn()}
                                    variables={variables}/>);
        expect(wrapper.state().selectedVar).toEqual(variables[0]);
        expect(wrapper.instance().getVarNames()).toEqual(['daysUptime']);
        const SelectVar = wrapper.find('SelectVar');
        expect(SelectVar.props().selectedVar).toEqual(variables[0]);
        const SelectField = SelectVar.shallow().find('SelectField');
        expect(SelectField.props().disabled).toBeFalsy();
        expect(SelectField.children().length).toBe(variables.length);
    });

});
