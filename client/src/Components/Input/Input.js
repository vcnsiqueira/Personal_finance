import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
    padding: 0.5em;
    color: #495057;
    border: 1px solid #CED4DA;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 400;
    background-color: #FFF;
    width: 300px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #DDDDDD;
        opacity: 1; /* Firefox */
}
`;

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Input