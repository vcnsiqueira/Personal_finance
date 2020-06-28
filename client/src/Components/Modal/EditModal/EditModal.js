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
            tipo: this.props.element.tipo,
            categoria: this.props.element.categoria,
            data: this.props.element.data,
            valor: this.props.element.valor,
            comentario: this.props.element.comentario,
        };
    };

    /*const removeElement = element => {
        onRemove(element.id);
        handleClose();
    };*/

    handleInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {

        const { tipo, categoria, data, valor, comentario } = this.state;
        const { show, children, element, handleClose } = this.props;

        const showHideClassName = show ? "modal display-block" : "modal display-none"

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
                        <div>
                            <Label>Tipo:</Label>
                            <Select name="tipo" value={tipo} /*onChange={this.handleSelect}*/ options={selectTypeOptions}/>
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
                        <Button backgroundColor="#4711B2" onClick={handleClose}>Cancelar</Button>
                        <Button variant="solid" backgroundColor="#4711B2">Salvar</Button>
                    </div>
                </div>
            </div>
        );
    }
}

EditModal.propTypes = {
    show: PropTypes.bool,
    children: PropTypes.node.isRequired,
    element: PropTypes.object,
    chandleClose: PropTypes.func,
}

export default  EditModal;