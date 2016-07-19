import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeValue } from '../actions/index';

class BlankOutButton extends Component {
    render() {
        return (
            <button type='button' className='btn btn-primary' onClick={(event) => this.props.changeValue(null)}>
                Set Value to Null
            </button>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changeValue}, dispatch)
}

export default connect(null, mapDispatchToProps)(BlankOutButton);
