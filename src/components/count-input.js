import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCount } from '../actions/index';

class CountInput extends Component {
    render() {
        return (
            <div className='form-group'>
                <label>Input Number</label>
                <input className='form-control' type='number' value={this.props.count} onChange={(event) => this.props.changeCount(event.target.value)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeCount}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountInput);
