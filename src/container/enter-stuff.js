import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeValue, changeCount } from '../actions/index';

import ValueInput from '../presentational/functional-value-input';
import CountInput from '../presentational/functional-count-input';
import CountSlider from '../presentational/functional-count-slider';

class EnterStuff extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">Enter Stuff (Container and Presentational Components)</div>
                <div className="panel-body">
                    <ValueInput 
                        label="Input Text"
                        value={this.props.value} 
                        onChange={(event) => this.props.changeValue(event.target.value)}/>
                    <CountInput
                        value={this.props.count}
                        onChange={(event => this.props.changeCount(event.target.value))}/>
                    <CountSlider
                        value={this.props.count}
                        onChange={(event) => {this.props.changeCount(event.target.value)}}/>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.value,
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue, changeCount}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterStuff);