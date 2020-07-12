import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalWrapper, ModalHeader, ModalBody, ModalFooter } from '../styled/Modal.styled';

import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Label from '../../Label/Label';
import Select from '../../Select/Select';


class RegisterModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tipo: '',
            categoria: '',
            data: '',
            valor: '',
            comentario: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.submitForm = this.submitForm.bind(this);

    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSelect = event => {
        this.setState({
            'tipo': event.target.value,
        })
    }

    submitForm = event => {
        event.preventDefault();
        this.props.addElement(this.state);
        this.props.handleClose();
        this.setState({
            tipo: '',
            categoria: '',
            data: '',
            valor: '',
            comentario: '',
        })
    };

    cancelRegister = event => {
        event.preventDefault();
        this.setState({
            tipo: '',
            categoria: '',
            data: '',
            valor: '',
            comentario: '',
        });
        this.props.handleClose();
    }

    handleBackground = event => {
        if (!event.target.closest('.modal-wrapper')) {
            this.setState({
                tipo: '',
                categoria: '',
                data: '',
                valor: '',
                comentario: '',
            });
            this.props.handleClose();
        };
    };

    render() {
    
        const { tipo, categoria, data, valor, comentario } = this.state;
        const { show, children } = this.props;
        const selectTypeOptions = [ 'Receita', 'Despesa' ];
        const showHideClassName = show ? "display-block" : "display-none"

        /*const handleEscape = event => {
            console.log(event.key);
            if (event.key === 'Escape') {
                handleClose();
            };
        };*/

        return(
            <Modal className={showHideClassName} onClick={this.handleBackground}>
                <ModalWrapper className="modal-wrapper" >
                    <ModalHeader>
                        <h3>{children}</h3>
                    </ModalHeader>
                    <form onSubmit={this.submitForm}>
                        <ModalBody>
                            <div>
                                <Label>Tipo:</Label>
                                <Select name="tipo" value={tipo} onChange={this.handleSelect} options={selectTypeOptions}/>
                            </div>
                            <div>
                                <Label>Categoria:</Label>
                                <Input type="text" name="categoria" value={categoria} onChange={this.handleInput} placeholder="Digite a categoria"/>
                            </div>
                            <div>
                                <Label>Data:</Label>
                                <Input type="date" name="data" value={data} onChange={this.handleInput} placeholder="Escolha uma data"/>
                            </div>
                            <div>
                                <Label>Valor:</Label>
                                <Input type="number" name="valor" value={valor} onChange={this.handleInput} placeholder="Digite o valor"/>
                            </div>
                            <div>
                                <Label>Comentário:</Label>
                                <Input type="text" name="comentario" value={comentario} onChange={this.handleInput} placeholder="Opcional"/>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button backgroundColor="#4711B2" type="button" onClick={this.cancelRegister}>Cancelar</Button>
                            <Button variant="solid" backgroundColor="#4711B2" type="submit">Cadastrar</Button>
                        </ModalFooter>
                    </form>
                </ModalWrapper>
            </Modal>
        );
    }

}

RegisterModal.propTypes = {
    categoria: PropTypes.string,
    data: PropTypes.string,
    valor: PropTypes.string,
    comentario: PropTypes.string,
    show: PropTypes.bool,
    children: PropTypes.node.isRequired,
    handleClose: PropTypes.func,
}

export default RegisterModal