import React from 'react';

import Button from '../../Button/Button';

const RegisterModal = ({ show, children, handleClose }) => {

    return(
        !show 
            ? null : 
            <div>
                <div>{children}</div>
                <Button onClick={handleClose}>Fechar Modal</Button>
            </div>
    );
}

export default RegisterModal