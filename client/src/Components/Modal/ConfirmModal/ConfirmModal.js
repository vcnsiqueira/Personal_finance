import React from 'react';

import Button from '../../Button/Button';

const ConfirmModal = ({ show, handleClose, children }) => {
    return(
        !show 
        ? null :
            <div className="modal-wrapper">
                <div className="modal-header">
                    {children}
                </div>
                <div className="modal-body">
                    Tem certeza que deseja excluir?
                </div>
                <div className="modal-footer">
                    <Button backgroundColor="#4711B2" onClick={handleClose}>Cancelar</Button>
                    <Button variant="solid" backgroundColor="#4711B2" type="submit">Sim</Button>
                </div>
            </div>
    );
}

export default  ConfirmModal;