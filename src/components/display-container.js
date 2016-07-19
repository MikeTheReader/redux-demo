import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleDisplay from './simple-display'

class DisplayContainer extends Component {
    render() {
        let displays = [];
        for (var i = 0; i < this.props.count; i++) {
            displays.push(<SimpleDisplay key={i} count={i+1} value={this.props.value}/>);
        }

        return (
            <div>
                {displays}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count,
        value: state.value
    };
}

export default connect(mapStateToProps)(DisplayContainer);
