import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './styled/Select.styled';

const Select = ({ value, options, onChange }) => {
    return(
        <StyledSelect defaultValue={value} onChange={onChange} required>
                <option value={''} disabled>Escolha</option>
                {options.map(option => {
                    return(
                        <option key={option} value={option}>{option}</option>
                    )
                })}
        </StyledSelect>
    );
}

Select.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
}


export default Select

