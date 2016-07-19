import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCount } from '../actions/index';

class CountSlider extends Component {
    render() {
        return (
            <div className='form-group'>
                <label>Or use this one to adjust the count:</label>
                <input
                    type='range'
                    value={this.props.count}
                    min="0" max="100"
                    onChange={(event) => this.props.changeCount(event.target.value)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CountSlider);
