import React from 'react';
import '../Modal.css';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';

const ConfirmModal = ({ show, handleClose, children, element, onRemove }) => {
    
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    
    const removeElement = element => {
        onRemove(element.id);
        handleClose();
    };

    const handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            handleClose();
        }
    };
    
    return(
        <div className={showHideClassName} onClick={handleBackground}>
            <div className="modal-wrapper">
                <div className="modal-header">
                    <h3>{children}</h3>
                </div>
                <div className="modal-body">
                    Tem certeza que deseja excluir?
                </div>
                <div className="modal-footer">
                    <Button backgroundColor="#4711B2" onClick={handleClose}>Cancelar</Button>
                    <Button variant="solid" backgroundColor="#4711B2" onClick={() => removeElement(element)}>Sim</Button>
                </div>
            </div>
        </div>
    );
}

ConfirmModal.propTypes = {
    show: PropTypes.bool,
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    element: PropTypes.object,
    onRemove: PropTypes.func,
}

export default  ConfirmModal;