import React, { Component, Fragment } from 'react';
import './App.css';

import Title from './Components/Title/Title';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: [
        {
          categoria: 'Supermercado',
          data: '2020-06-05',
          valor: '100.00'
        },
        {
          categoria: 'Alimentação',
          data: '2020-06-05',
          valor: '20.00'
        },
        {
          categoria: 'Farmácia',
          data: '2020-06-06',
          valor: '45.00'
        }
      ],
      searchTerm: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleSubmit = (data) => {
    const newElement = {
      categoria: data.categoria,
      data: data.data,
      valor: data.valor
    };
    this.setState({
      list: [...this.state.list, newElement]
    });

  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  render() { 

    const { list, searchTerm } = this.state

    return (
      <Fragment>
        <Title>Controle Financeiro</Title>
        <Form handleSubmit={this.handleSubmit}/>
        <hr></hr>
        <Title>Tabela</Title>
        <input type="text" value={searchTerm} onChange={this.handleSearch}/>
        <Table list = {list} searchTerm={searchTerm}/>
      </Fragment>
    );
  }
}

export default App;
