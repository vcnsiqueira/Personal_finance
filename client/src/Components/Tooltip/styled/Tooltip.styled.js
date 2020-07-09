import styled, { keyframes, css } from 'styled-components';

export const StyledTooltip = styled.div`
    position: relative;
    display: inline-flex;
    user-select: none;
    cursor: pointer;
    margin: 0px;
    -webkit-tap-highlight-color: transparent;
`;

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const border = '10px solid';

const directions = {
    top: css`
        bottom: calc(100% + 18px);
        left: 50%;
        transform: translateX(-50%);

        .arrow {
            bottom: -8px;
            left: calc(50% - 10px);
            border-right: ${border} transparent;
            border-top: ${border} black;
            border-left: ${border} transparent;
        }
    `,
    right: css`
        top: 50%;
        transform: translateY(-50%);
        left: calc(100% + 18px);

        .arrow {
            top: calc(50% - 10px);
            border-top: ${border} transparent;
            border-bottom: ${border} transparent;
            left: -8px;
            border-right: ${border} black;
        }
    `,
    left: css`
        top: 50%;
        transform: translateY(-50%);
        right: calc(100% + 18px);

        .arrow {
            top: calc(50% - 10px);
            border-top: ${border} transparent;
            border-bottom: ${border} transparent;
            right: -8px;
            border-left: ${border} black;
        }
    `,
    bottom: css`
        top: calc(100% + 18px);
        left: 50%;
        transform: translateX(-50%);

        .arrow {
            top: -8px;
            left: calc(50% - 10px);
            border-right: ${border} transparent;
            border-bottom: ${border} black;
            border-left: ${border} transparent;
        }
    `,
    getDirection(direction) {
        return this[direction] || this.right;
    },
};

export const StyledContentTooltip = styled.div`
    color: #FFFFFF;
    position: absolute;
    opacity: 0.9;
    z-index: 100;
    padding: 12px;
    font-size: 12px;
    cursor: default;
    border-radius: 4px;
    white-space: nowrap;
    font-family: monospace;
    background-color: black;
    box-shadow: 0 0 0.3rem rgba(0,0,0,0.16);
    animation: ${fadeIn} ease-in-out 0.2s;

    .arrow {
        position:absolute;
        width: 0;
        height: 0;
    }

    ${(props) => css`
        ${directions.getDirection(props.direction)};
    `}
`;