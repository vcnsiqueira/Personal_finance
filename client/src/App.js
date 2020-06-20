import React, { Component, Fragment } from 'react';
import './App.css';

import Title from './Components/Title/Title';
import Form from './Components/Form/Form';
import Table from './Components/Table/Table';
import Search from './Components/Search/Search';
import RegisterModal from './Components/Modal/RegisterModal/RegisterModal';
import Button from './Components/Button/Button';

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
      searchTerm: '',
      showRegisterModal: false,
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

  handleSearch = event => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  toggleRegisterModal = event => {
    this.setState({
      showRegisterModal: !this.state.showRegisterModal,
    })
  } 

  render() { 

    const { list, searchTerm, showRegisterModal } = this.state

    return (
      <Fragment>
        <Title>Controle Financeiro</Title>
        <Form handleSubmit={this.handleSubmit}/>
        <RegisterModal show={showRegisterModal} handleClose={this.toggleRegisterModal}>Novo Cadastro</RegisterModal>
        <Button variant="solid" backgroundColor="primary" size="1" onClick={this.toggleRegisterModal}>Novo Cadastro</Button>
        <hr></hr>
        <Title>Tabela</Title>
        <Search type="text" value={searchTerm} onChange={this.handleSearch}/>
        <Table list = {list} searchTerm={searchTerm}/>
      </Fragment>
    );
  }
}

export default App;
