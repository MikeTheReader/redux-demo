import React from 'react';

const CountSlider = ({value, onChange, label}) => {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <input
                type='range'
                value={value}
                min="0" max="100"
                onChange={onChange}/>
        </div>
    );
}

CountSlider.propTypes = {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired
}

export default CountSlider;


