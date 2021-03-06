import styled from 'styled-components';

export const StyledButton = styled.button`    
    background-color: ${props => {
        if(props.variant === 'solid') {
            switch(props.backgroundColor) {
                case 'primary':
                    return '#007BFF';
                case 'secondary':
                    return '#6C757D';
                case 'sucess':
                    return '#28A745';
                case 'danger':
                    return '#DC3545';
                case 'warning':
                    return '#FFC107';
                case 'info':
                    return '#17A2B8';
                case 'dark':
                    return '#343A40';
                case props.backgroundColor:
                    return props.backgroundColor;
                default:
                    return '#CCCCCC';
            }
        } else {
            return '#FFFFFF';
        }
    }};
    border: ${props => props.borderSize ? props.borderSize : '1px'} solid ${props => {
        switch(props.backgroundColor) {
            case 'primary':
                return '#007BFF';
            case 'secondary':
                return '#6C757D';
            case 'sucess':
                return '#28A745';
            case 'danger':
                return '#DC3545';
            case 'warning':
                return '#FFC107';
            case 'info':
                return '#17A2B8';
            case 'dark':
                return '#343A40';
            case props.backgroundColor:
                return props.backgroundColor;
            default:
                return '#CCCCCC';
        }
    }};
    border-radius: 3px;
    color: ${props => {
        if(props.variant === 'solid' && props.backgroundColor !== 'warning') {
            return '#FFFFFF';
        } else if (props.variant === 'solid' && props.backgroundColor === 'warning') {
            return '#000000';
        } else {
            switch(props.backgroundColor) {
                case 'primary':
                    return '#007BFF';
                case 'secondary':
                    return '#6C757D';
                case 'sucess':
                    return '#28A745';
                case 'danger':
                    return '#DC3545';
                case 'warning':
                    return '#FFC107';
                case 'info':
                    return '#17A2B8';
                case 'dark':
                    return '#343A40';
                case props.backgroundColor:
                    return props.backgroundColor;
                default:
                    return '#000000';
            }
        }
    }};
    font-size: ${props => props.fontSize === 'xlarge' ? '2.5rem' : props.fontSize === 'large' ? '1.5rem' : props.fontSize === 'small' ? '0.75rem' : '1rem'};
    margin: 5px;
    padding: 0.5rem 0.8rem;
    {/*width: ${props => props.size ? props.size * 100 : 50}px;*/}
    font-weight: bold;

    &:hover {
        background-color: #311B92;
        color: #FFFFFF;
        border: solid 1px #311B92;
        font-weight: bold;
    }
`;