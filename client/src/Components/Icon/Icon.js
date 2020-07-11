import React from 'react';
import PropTypes from 'prop-types';
import { StyledIcon } from './styled/Icon.styled';

const Icon = ({ children, color, border, hover, onClick}) => {
    return(
        <StyledIcon color={color} border={border} hover={hover} onClick={onClick}>
            {children}
        </StyledIcon>
    );
}

Icon.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    border: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Icon;