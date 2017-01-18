import React from 'react';
import Result from '../Result';
import { shallow } from 'enzyme';
import { getVariables } from '../../../reducers/History';


describe('<Result />', () => {

    it('renders initially empty', () => {
        const wrapper = shallow(<Result
                                    isFetching={false}
                                    onRetry={jest.fn()}
                                    result={[]}
                                    variables={[]}/>);
        expect(wrapper.state().selectedVar).toBeUndefined();
        expect(wrapper.instance().getKeys()).toEqual([undefined, undefined]);
        const SelectVar = wrapper.find('SelectVar');
        expect(SelectVar.props().selectedVar).toBeUndefined();
        const SelectField = SelectVar.shallow().find('SelectField');
        expect(SelectField.props().disabled).toBeTruthy();
        expect(SelectField.children().length).toBe(0);
    });

    const result = [
        {
            "localTime": "2016-10-11T14:45:03.844-03:00",
            "timestamp": 1476207903,
            "metrics": {
                "daysUptime": 4,
                "load": {
                    "load1": 0.11,
                },
                "swapMemory": {
                    "used": 0,
                    "usedpercent": 0
                },
                "virtualMemory": {
                    "active": 5937995776,
                }
            }
        },
        {
            "localTime": "2016-10-11T14:44:03.844-03:00",
            "timestamp": 1476207843,
            "metrics": {
                "daysUptime": 4,
                "load": {
                    "load5": 0.04
                },
                "swapMemory": {
                    "total": 16775114752,
                },
                "temperature": "-",
                "virtualMemory": {
                    "writebacktmp": 0
                }
            }
        },
        {
            "localTime": "2016-10-11T14:43:03.843-03:00",
            "timestamp": 1476207783,
            "metrics": {
                "daysUptime": 4,
                "load": {
                    "load1": 0,
                    "load15": 0,
                },
                "swapMemory": {
                    "free": 16775114752,
                },
                "temperature": "-",
                "virtualMemory": {
                    "writebacktmp": 0
                }
            }
        }
    ]
    const variables = getVariables({history: {result}});

    it('renders after data update', () => {

        const wrapper = shallow(<Result
                                    isFetching={false}
                                    onRetry={jest.fn()}
                                    result={[]}
                                    variables={[]}/>);
        wrapper.setProps({result: result, variables: variables});
        expect(wrapper.state().selectedVar).toEqual(variables[0]);
        expect(wrapper.instance().getKeys()).toEqual(['daysUptime']);
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
                                    result={result}
                                    variables={variables}/>);
        expect(wrapper.state().selectedVar).toEqual(variables[0]);
        expect(wrapper.instance().getKeys()).toEqual(['daysUptime']);
        const SelectVar = wrapper.find('SelectVar');
        expect(SelectVar.props().selectedVar).toEqual(variables[0]);
        const SelectField = SelectVar.shallow().find('SelectField');
        expect(SelectField.props().disabled).toBeFalsy();
        expect(SelectField.children().length).toBe(variables.length);
    });

});
