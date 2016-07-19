import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';


class StateViewer extends Component {
    render() {
        return (
            <div>
                <Highlight>
                    {this.props.state}
                </Highlight>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        state: JSON.stringify(state, null, 2)
    };
}

export default connect(mapStateToProps)(StateViewer);
