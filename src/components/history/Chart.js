import React from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts';
require('highcharts');
import { getTimeSeries } from '../../reducers/History';

const Chart = ({variable, data}) => {
    const options = {
        legend: {
            enabled: false,
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: null
            }
        },
        chart: {
            zoomType: 'xy'
        },
        credits: {
            enabled: false
        },
        title: {
            text: null
        },
        yAxis: {
            title: {
                text: null
            }
        },
        subtitle: {
            align: 'right',
            text: `${data.length} samples`
        },
        series: [
            {
                index: 0,
                name: variable,
                data
            }
        ]
    };
    return <ReactHighcharts config={options}/>
}


const mapStateToProps = (state, {name, subName}) => (
    {
        data: getTimeSeries(state, name, subName)
    }
)

export default connect(mapStateToProps)(Chart)
