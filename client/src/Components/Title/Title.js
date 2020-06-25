import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
    text-align: center;
    color: #4711B2;
    font-size: 3rem;
    margin: 0;
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Title;

