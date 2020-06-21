import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Label from '../Label/Label';
import Button from '../Button/Button';
import Select from '../Select/Select';

class Form extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            categoria: '',
            data: '',
            valor: '',
            comentario: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.submitForm = this.submitForm.bind(this);

    }

    handleInput = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    submitForm = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    }

    render() {

        const { categoria, data, valor, comentario } = this.state;
        const selectOptions = [ 'Receita', 'Despesa' ];

        return(
            <form onSubmit={this.submitForm}>
                <div>
                    <Label>Cadastro:</Label>
                    <Select name="cadastro" options={selectOptions}/>
                </div>
                <div>
                    <Label>Categoria:</Label>
                    <Input type="text" name="categoria" value={categoria} onChange={this.handleInput}/>
                </div>
                <div>
                    <Label>Data:</Label>
                    <Input type="date" name="data" value={data} onChange={this.handleInput}/>
                </div>
                <div>
                    <Label>Valor:</Label>
                    <Input type="number" name="valor" value={valor} onChange={this.handleInput}/>
                </div>
                <div>
                    <Label>Comentário:</Label>
                    <Input type="text" name="comentario" value={comentario} onChange={this.handleInput}/>
                </div>
                <Button variant="solid" backgroundColor="primary" size="1" type="submit">Cadastrar</Button>
            </form>
        );
    }

}

Form.propTypes = {
    categoria: PropTypes.string,
    data: PropTypes.string,
    valor: PropTypes.string,
}

export default Form;

