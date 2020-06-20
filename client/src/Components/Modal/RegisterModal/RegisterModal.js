import React from 'react';
import './RegisterModal.css'

import Button from '../../Button/Button';

const RegisterModal = ({ show, children, handleClose }) => {

    return(
        !show 
            ? null : 
            <div className="modal" id="modal">
                <h2>Modal Window</h2>
                <div className="modal-content">{children}</div>
                <div className="actions">
                    <Button onClick={handleClose}>Fechar Modal</Button>
                </div>
            </div>
    );
}

export default RegisterModal