import React, { Component, Fragment } from 'react';

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

    }

    handleInput = event => {
        const { name, value } = event.target; 
        this.setState({
            [name] : value
        });
    }

    render() {
        return(
            <Fragment>
                <Label>Categoria</Label>
                <Input type="text" name="categoria" value={this.state.categoria} onChange={this.handleInput}/>
                <Label>Data</Label>
                <Input type="date" name="data" value={this.state.data} onChange={this.handleInput}/>
                <Label>Valor</Label>
                <Input type="number" name="valor" value={this.state.valor} onChange={this.handleInput}/>
                <Button variant="solid" backgroundColor="primary" size="1">Enviar</Button>
            </Fragment>
        );
    }


}

export default Form;

