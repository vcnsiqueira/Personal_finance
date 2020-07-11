import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './styled/Title.styled';

const Title = ({ children }) => {
    return(
        <StyledTitle>
            {children}
        </StyledTitle>
    );
};

Title.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Title;

