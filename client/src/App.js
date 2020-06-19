import React, { Component, Fragment } from 'react';
import './App.css';
import PropTypes from 'prop-types';

import Title from './Components/Title/Title';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';
import Search from './Components/Search/Search';

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

  handleSubmit = (dados) => {
    const newElement = {
      categoria: dados.categoria,
      data: dados.data,
      valor: parseFloat(dados.valor).toFixed(2),
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
        <Search type="text" value={searchTerm} onChange={this.handleSearch}/>
        <Table list = {list} searchTerm={searchTerm}/>
      </Fragment>
    );
  }
}

export default App;
