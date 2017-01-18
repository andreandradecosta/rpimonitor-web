import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import InfoPanel from '../InfoPanel';
import { historyStyles } from '../../styles';

const SelectVar = ({variables, selectedVar, onChange}) => (
    <SelectField
        floatingLabelText="Variable"
        autoWidth={true}
        value={selectedVar}
        onChange={onChange}
        disabled={variables.length === 0}
        style={historyStyles.field}>
        {
            variables.map((v, i) => <MenuItem key={i} value={v} primaryText={v}/>)
        }
    </SelectField>
)
SelectVar.displayName = 'SelectVar';

class Result extends React.Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        errorMessage: PropTypes.string,
        onRetry: PropTypes.func.isRequired,
        result: PropTypes.array.isRequired,
        variables: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedVar: this.props.variables[0]
        }
    }

    changeVar = (event, index, value) => {
        this.setState({
            selectedVar: value
        });
    }

    getKeys = () => {
        if (typeof this.state.selectedVar !== 'undefined') {
            return this.state.selectedVar.split('.');
        }
        return [undefined, undefined];
    }

    componentWillReceiveProps( { result, variables } ) {
       if (typeof this.state.selectedVar === 'undefined') {
            this.setState({
                selectedVar: variables[0]
            });
       }
    }

    render() {
        const [key, subKey] = this.getKeys();
        const { isFetching, errorMessage, onRetry, result, variables } = this.props;
        const varTitle = this.state.selectedVar || 'Variable';
        return (
            <InfoPanel
                isFetching={isFetching}
                errorMessage={errorMessage}
                onRetry={onRetry}>
                    <p>{isFetching? 'Loading...': ''}</p>
                    <SelectVar
                        variables={variables}
                        selectedVar={this.state.selectedVar}
                        onChange={this.changeVar} />
                    <table>
                        <thead>
                            <tr>
                                <th>Date/Time</th>
                                <th>{varTitle}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                result.map((data, i) => {
                                    const metrics = data.metrics[key];
                                    const val = subKey? metrics[subKey]: metrics;
                                    return (
                                        <tr key={i}>
                                            <td>{data.localTime}</td>
                                            <td>{val}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </InfoPanel>
        )
    }
}

export default Result;
