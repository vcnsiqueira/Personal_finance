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
    :hover {
        color: ${props => props.color !== '#FFF' ? '#FFF' : '#AAA'};
        background-color: ${props => props.color};
    }
`

const Icon = ({ children, color, border, item, onClick }) => {
    return(
        <Div color={color} border={border} item={item} onClick={() => onClick(item.id)}>
            {children}
        </Div>
    );
}

Icon.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    border: PropTypes.bool,
    item: PropTypes.object,
    onClick: PropTypes.func,
}

export default Icon;