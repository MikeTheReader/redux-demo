import React from 'react';

const ValueInput = ({label, value, onChange}) => {
    return (
        
        <div className='form-group'>
            <label>{label}</label>
            <input className='form-control'
                type='text'
                value={value}
                onChange={onChange}/>
        </div>
    )
};

ValueInput.propTypes = {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired
};

export default ValueInput;

