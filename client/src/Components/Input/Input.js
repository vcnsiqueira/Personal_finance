import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styled/Input.styled';

const Input = ({ type, name, value, onChange, placeholder }) => {
    return(
        <StyledInput 
            type={type} 
            name={name} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder}
        />
    );
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}

export default Input;