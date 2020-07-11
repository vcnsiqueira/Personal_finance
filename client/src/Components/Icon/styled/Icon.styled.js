import styled from 'styled-components';

export const StyledIcon = styled.div`
    display: inline-block;
    color: ${props => props.color};
    border: ${props => props.border ? 'solid' : 'none'} 1px ${props => props.color};
    border-radius: 3px;
    padding: 0.5rem;
    margin: 0.2rem;
    :hover {
        color: ${props => props.hover ? props.color !== '#FFF' ? '#FFF' : '#AAA' : 'none'};
        background-color: ${props => props.hover ? props.color : 'none'};
    }
`;