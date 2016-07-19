import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeValue } from '../actions/index';

class ValueInput extends Component {
    render() {
        return (
            <div className='form-group'>
                <label>Input Text</label>
                <input className='form-control' type='text' value={this.props.value} onChange={(event) => this.props.changeValue(event.target.value)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.value
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ValueInput);
