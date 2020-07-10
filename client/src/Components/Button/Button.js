import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled/Button.styled';

const Button = ({ variant, backgroundColor, children, onClick }) => {
    
    return(
        <StyledButton backgroundColor={backgroundColor} variant={variant} onClick={onClick}>{children}</StyledButton>
    );
};

Button.propTypes = {
    variant: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;