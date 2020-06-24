import React, { Component, Fragment } from 'react';
import './App.css';

import Title from './Components/Title/Title';
import Table from './Components/Table/Table';
import Search from './Components/Search/Search';
import RegisterModal from './Components/Modal/RegisterModal/RegisterModal';
import Button from './Components/Button/Button';
import ConfirmModal from './Components/Modal/ConfirmModal/ConfirmModal';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: [
        {
          id: 0,
          tipo: 'Despesa',
          categoria: 'Supermercado',
          data: '2020-06-05',
          valor: '100.00',
          comentario: '',
        },
        {
          id: 1,
          tipo: 'Despesa',
          categoria: 'Alimentação',
          data: '2020-06-05',
          valor: '20.00',
          comentario: '',
        },
        {
          id: 2,
          tipo: 'Despesa',
          categoria: 'Farmácia',
          data: '2020-06-06',
          valor: '45.00',
          comentario: 'Teste',
        }
      ],
      searchTerm: '',
      showRegisterModal: false,
      showConfirmModal: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleSubmit = (dados) => {
    const newId = Math.floor(Math.random(1) * 1000000000000000)
    const newElement = {
      id: newId,
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

  toggleConfirmModal = event => {
    this.setState({
      showConfirmModal: !this.state.showConfirmModal,
    })
  }

  handleRemove = id => {
    const newList = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: [...newList],
    });
  };

  render() { 

    const { list, searchTerm, showRegisterModal, showConfirmModal } = this.state

    return (
      <Fragment>
        <Title>Controle Financeiro</Title>
        <Button variant="solid" backgroundColor="#4711B2" onClick={this.toggleRegisterModal}>+</Button>
        <RegisterModal show={showRegisterModal} handleClose={this.toggleRegisterModal} handleSubmit={this.handleSubmit}>Novo Cadastro</RegisterModal>
        <Search type="text" value={searchTerm} onChange={this.handleSearch}/>
        <Table list = {list} searchTerm={searchTerm} onRemove={this.handleRemove}/>
        <ConfirmModal show={showConfirmModal} handleClose={this.toggleConfirmModal}>Excluir</ConfirmModal>
      </Fragment>
    );
  }
}

export default App;
