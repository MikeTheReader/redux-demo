import React from 'react';

const CountInput = ({value, onChange, label}) => {
    return (
        <div className='form-group'>
            <label>{label}</label>
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
    label: React.PropTypes.string.isRequired,
    count: React.PropTypes.number,
    onChange: React.PropTypes.func.isRequired
}

export default CountInput;