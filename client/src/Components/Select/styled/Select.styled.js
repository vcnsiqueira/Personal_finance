import styled from 'styled-components';

export const StyledSelect = styled.select`
    padding: 0.5em;
    margin: 10px;
    color: #495057;
    border: 1px solid #4711B2;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 400;
    background-color: #FFF;
    width: 268px;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #DDDDDD;
        opacity: 1; /* Firefox */

    option {
        color: #495057;
        background: #FFF;
        padding: 0.5em;
        margin: 10px;
    }
    }
`;