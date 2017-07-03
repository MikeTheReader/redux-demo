import React from 'react';

const CountInput = ({value, onChange}) => {
    return (
        <div className='form-group'>
            <label>How Many Times Do You Want to Show the Text?</label>
            <input
                className='form-control'
                type='number'
                value={value}
                min="0" max="100"
                onChange={onChange}/>
        </div>
    );
}

CountInput.propTypes = {
    count: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired
}

export default CountInput;