import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
    color: #000;
`;

Label.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Label