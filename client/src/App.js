import React, { Component, Fragment } from 'react';
import './App.css';

import Title from './Components/Title/Title';
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
          tipo: 'Despesa',
          categoria: 'Supermercado',
          data: '2020-06-05',
          valor: '100.00',
          comentario: '',
        },
        {
          tipo: 'Despesa',
          categoria: 'Alimentação',
          data: '2020-06-05',
          valor: '20.00',
          comentario: '',
        },
        {
          tipo: 'Despesa',
          categoria: 'Farmácia',
          data: '2020-06-06',
          valor: '45.00',
          comentario: 'Teste',
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
      tipo: dados.tipo,
      categoria: dados.categoria,
      data: dados.data,
      valor: parseFloat(dados.valor).toFixed(2),
      comentario: dados.comentario
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
        <Button variant="solid" backgroundColor="#4711B2" onClick={this.toggleRegisterModal}>+</Button>
        <RegisterModal show={showRegisterModal} handleClose={this.toggleRegisterModal} handleSubmit={this.handleSubmit}>Novo Cadastro</RegisterModal>
        <Search type="text" value={searchTerm} onChange={this.handleSearch}/>
        <Table list = {list} searchTerm={searchTerm}/>
      </Fragment>
    );
  }
}

export default App;
