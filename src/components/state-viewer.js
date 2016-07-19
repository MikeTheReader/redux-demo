import React from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';


function StateViewer(props) {
    return (
        <div>
            <Highlight>
                {props.state}
            </Highlight>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        state: JSON.stringify(state, null, 2)
    };
}

export default connect(mapStateToProps)(StateViewer);
