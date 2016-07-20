import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeta } from './meta-selector'
import Highlight from 'react-highlight';
import BarChart from 'react-bar-chart';

class MetaContainer extends Component {

    render() {
        let height = 200,
            width = 500,
            margins = {left:50, right: 80, top: 20, bottom: 50}

        return (
            <div>
                <div>Count Squared: {this.props.meta.squared}</div>
                <div>Character Distribution:</div>
                <BarChart
                    ylabel=''
                    width={width}
                    height={height}
                    data={this.props.meta.chartData}
                    margin={margins}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
        value: state.value,
        meta: getMeta(state)
    };
}

export default connect(mapStateToProps)(MetaContainer);
