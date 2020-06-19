import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h1`
    text-align: center;
    color: #3949AB;
    font-size: 3rem;
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Title;

