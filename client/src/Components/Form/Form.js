import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Label from '../Label/Label';
import Button from '../Button/Button';

class Form extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            categoria: '',
            data: '',
            valor: ''
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
        return(
            <form onSubmit={this.submitForm}>
                <Label>Categoria</Label>
                <Input type="text" name="categoria" value={this.state.categoria} onChange={this.handleInput}/>
                <Label>Data</Label>
                <Input type="date" name="data" value={this.state.data} onChange={this.handleInput}/>
                <Label>Valor</Label>
                <Input type="number" name="valor" value={this.state.valor} onChange={this.handleInput}/>
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

