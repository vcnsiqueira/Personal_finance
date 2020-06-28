import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectStyles = styled.select`
    padding: 0.5em;
    margin: 10px;
    color: #495057;
    border: 1px solid #4711B2;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 400;
    background-color: #FFF;
    width: 268px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #DDDDDD;
        opacity: 1; /* Firefox */
    
    option {
        color: #495057;
        background: #FFF;
        padding: 0.5em;
        margin: 10px;
    }
}
`;

const Select = ({ value, options, onChange }) => {
    return(
        <SelectStyles defaultValue={value} onChange={onChange} required>
                <option value={''} disabled>Escolha</option>
                {options.map(option => {
                    return(
                        <option key={option} value={option}>{option}</option>
                    )
                })}
        </SelectStyles>
    );
}

Select.propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
}


export default Select

