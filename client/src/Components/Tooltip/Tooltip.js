import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledTooltip, StyledContentTooltip } from './styled/Tooltip.styled';

const Tooltip = ({ children, title, direction }) => {
    
    const node = useRef();
    const [hover, setHover] = useState(false)

    const handleHover = ({ target }) => {
        if (node.current.contains(target)) {
            return;
        }
        setHover(false);
    };

    useEffect(() => {
        // add when mounted
        document.addEventListener('mouseover', handleHover);
        //return function to be called when unmounted
        return () => {
            document.removeEventListener('mouseout', handleHover);
        };
    }, []);

    return (
        <StyledTooltip
            onMouseOver={() => setHover(true)}
            onFocus={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onBlur={() => setHover(false)}
            ref={node}
        >
            <div>{children}</div>
            {hover && (
                <StyledContentTooltip direction={direction}>
                    <span className="arrow" />
                        {title !== '' || title !== null ? title : 'Sem título'}
                </StyledContentTooltip>
            )}
        </StyledTooltip>
    );
};

Tooltip.defaultProps = {
    direction: 'right',
};

Tooltip.propTypes = {
    title: PropTypes.string.isRequired,
    direction: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Tooltip;