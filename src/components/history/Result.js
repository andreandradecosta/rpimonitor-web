import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as reducer from '../../reducers/History';;
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import InfoPanel from '../InfoPanel';
import { historyStyles } from '../../styles';
import Chart from './Chart';


const SelectVar = ({variables, selectedVar, onChange}) => (
    <SelectField
        floatingLabelText="Variable"
        autoWidth={true}
        value={selectedVar}
        disabled={variables.length === 0}
        onChange={onChange}
        style={historyStyles.field}>
        {
            variables.map((v, i) => <MenuItem key={i} value={v} primaryText={v}/>)
        }
    </SelectField>
)
SelectVar.displayName = 'SelectVar';

export class Result extends React.Component {
    static propTypes = {
        onRetry: PropTypes.func.isRequired,
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

    getVarNames = () => {
        if (typeof this.state.selectedVar !== 'undefined') {
            return this.state.selectedVar.split('.');
        }
        return [undefined, undefined];
    }

    componentWillReceiveProps( { variables } ) {
       if (typeof this.state.selectedVar === 'undefined') {
            this.setState({
                selectedVar: variables[0]
            });
       }
    }

    render() {
        const { isFetching, errorMessage, onRetry, variables } = this.props;
        const [name, subName] = this.getVarNames();
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
                    <Chart variable={this.state.selectedVar} name={name} subName={subName} />
            </InfoPanel>
        )
    }
}

const mapStateToProps = (state) => (
    {
        isFetching: reducer.getIsFetching(state),
        errorMessage: reducer.getErrorMessage(state),
        variables: reducer.getVariables(state)
    }
);


export default connect(mapStateToProps)(Result);
