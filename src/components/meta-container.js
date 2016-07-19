import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMeta } from './meta-selector'
import Highlight from 'react-highlight';

require('../../node_modules/highlight.js/styles/default.css');


class MetaContainer extends Component {
    render() {
        let distribution = null;
        if (this.props.value) {
            distribution = (
                <div>Character Distribution:
                    <Highlight>
                        {this.props.meta.letters}
                    </Highlight>
                </div>
            );
        }
        return (
            <div>
                <div>Count Squared: {this.props.meta.squared}</div>
                {distribution}
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
