import React from 'react';
//import '../Modal.css';
import PropTypes from 'prop-types';
import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFooter } from '../styled/Modal.styled';

import Button from '../../Button/Button';

const ConfirmModal = ({ show, handleClose, children, element, onRemove }) => {
    
    const showHideClassName = show ? "display-block" : "display-none"
    
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
        <Modal className={showHideClassName} onClick={handleBackground}>
            <ModalWrapper className="modal-wrapper">
                <ModalHeader>
                    <h3>{children}</h3>
                </ModalHeader>
                <ModalBody>
                    Tem certeza que deseja excluir?
                </ModalBody>
                <ModalFooter>
                    <Button backgroundColor="#4711B2" onClick={handleClose}>Cancelar</Button>
                    <Button variant="solid" backgroundColor="#4711B2" onClick={() => removeElement(element)}>Sim</Button>
                </ModalFooter>
            </ModalWrapper>
        </Modal>
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