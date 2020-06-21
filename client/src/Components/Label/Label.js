import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
    display: inline-block;
    color: #000;
    font-weight: bold;
    padding-right: 10px;
    margin: 10px;
    text-align: left;
    width: 100px;
    vertical-align: middle;
`;

Label.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Label