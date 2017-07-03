import React from 'react';

const CountSlider = ({value, onChange}) => {
    return (
        <div className='form-group'>
            <label>Or use this one to adjust the count:</label>
            <input
                type='range'
                value={value}
                min="0" max="100"
                onChange={onChange}/>
        </div>
    );
}

CountSlider.propTypes = {
    value: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired
}

export default CountSlider;


