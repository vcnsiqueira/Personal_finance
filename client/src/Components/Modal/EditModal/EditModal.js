import React, { Component } from 'react';
import '../Modal.css';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Label from '../../Label/Label';
import Select from '../../Select/Select';

const selectTypeOptions = [ 'Receita', 'Despesa' ];

class EditModal extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            id: this.props.element.id,
            tipo: this.props.element.tipo,
            categoria: this.props.element.categoria,
            data: this.props.element.data,
            valor: this.props.element.valor,
            comentario: this.props.element.comentario,
            initialState: {
                id: this.props.element.id,
                tipo: this.props.element.tipo,
                categoria: this.props.element.categoria,
                data: this.props.element.data,
                valor: this.props.element.valor,
                comentario: this.props.element.comentario,
            }
        };
    };

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSelect = event => {
        this.setState({
            tipo: event.target.value,
        })
    }

    submitForm = event => {
        //console.log(this.state.initialState);
        event.preventDefault();
        //console.log(this.state);
        //console.log(this.props.index);
        this.props.editElement(this.state, this.props.index);
        this.props.handleClose();
    };

    cancelEdit = event => {
        this.setState({
            id: this.state.initialState.id,
            tipo: this.state.initialState.tipo,
            categoria: this.state.initialState.categoria,
            data: this.state.initialState.data,
            valor: this.state.initialState.valor,
            comentario: this.state.initialState.comentario,
        });
        this.props.handleClose();
    };

    handleBackground = event => { // Função para fechar o modal ao clicar fora
        if (!event.target.closest('.modal-wrapper')) {
            this.setState({
                id: this.state.initialState.id,
                tipo: this.state.initialState.tipo,
                categoria: this.state.initialState.categoria,
                data: this.state.initialState.data,
                valor: this.state.initialState.valor,
                comentario: this.state.initialState.comentario,
            });
            this.props.handleClose();
        }
    };

    render() {

        const { tipo, categoria, data, valor, comentario } = this.state;
        const { show, children } = this.props;

        const showHideClassName = show ? "modal display-block" : "modal display-none"

        return(
            <div className={showHideClassName} onClick={this.handleBackground}>
                <div className="modal-wrapper">
                    <div className="modal-header">
                        <h3>{children}</h3>
                    </div>
                    <form onReset={this.cancelEdit} onSubmit={this.submitForm}>
                        <div className="modal-body">
                            <div>
                                <Label>Tipo:</Label>
                                <Select name="tipo" value={tipo} onChange={this.handleSelect} options={selectTypeOptions}/>
                            </div>
                            <div>
                                <Label>Categoria:</Label>
                                <Input type="text" name="categoria" value={categoria} onChange={this.handleInput} placeholder="Digite a categoria" required/>
                            </div>
                            <div>
                                <Label>Data:</Label>
                                <Input type="date" name="data" value={data} onChange={this.handleInput} placeholder="Escolha uma data" required/>
                            </div>
                            <div>
                                <Label>Valor:</Label>
                                <Input type="number" name="valor" value={valor} onChange={this.handleInput} placeholder="Digite o valor" required/>
                            </div>
                            <div>
                                <Label>Comentário:</Label>
                                <Input type="text" name="comentario" value={comentario} onChange={this.handleInput} placeholder="Opcional"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Button backgroundColor="#4711B2" type="reset">Cancelar</Button>
                            <Button variant="solid" backgroundColor="#4711B2" type="submit">Salvar</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

EditModal.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node.isRequired,
    element: PropTypes.object,
    handleClose: PropTypes.func,
}

export default  EditModal;