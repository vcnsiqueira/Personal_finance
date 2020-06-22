import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
    display: inline-block;
    color: ${props => props.color};
    border: ${props => props.border ? 'solid' : 'none'} 1px ${props => props.color};
    border-radius: 3px;
    padding: 0.5rem;
    margin: 0.2rem;
`

const Icon = ({ children, color, border }) => {
    return(
        <Div color={color} border={border}>
            {children}
        </Div>
    );
}

Icon.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Icon;