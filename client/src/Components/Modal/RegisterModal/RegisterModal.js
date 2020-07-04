import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Modal.css'

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
    };

    cancelRegister = event => {
        this.setState({
            tipo: '',
            categoria: '',
            data: '',
            valor: '',
            comentario: '',
        })
        this.props.handleClose();
    }

    render() {
    
        const { tipo, categoria, data, valor, comentario } = this.state;
        const { show, children, handleClose } = this.props;
        const selectTypeOptions = [ 'Receita', 'Despesa' ];
        const showHideClassName = show ? "modal display-block" : "modal display-none"

        /*const handleEscape = event => {
            console.log(event.key);
            if (event.key === 'Escape') {
                handleClose();
            };
        };*/

        const handleBackground = event => {
            if (!event.target.closest('.modal-wrapper')) {
                handleClose();
            };
        };

        return(
            <div className={showHideClassName} onClick={handleBackground}>
                <div className="modal-wrapper" >
                    <div className="modal-header">
                        <h3>{children}</h3>
                    </div>
                    <form onReset={this.cancelRegister} onSubmit={this.submitForm}>
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
                            <Button variant="solid" backgroundColor="#4711B2" type="submit">Cadastrar</Button>
                        </div>
                    </form>
                </div>
            </div>
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