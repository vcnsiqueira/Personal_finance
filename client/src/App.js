import React, { Component, Fragment } from 'react';
import './App.css';

import Title from './Components/Title/Title';
import Table from './Components/Table/Table';
import Search from './Components/Search/Search';
import RegisterModal from './Components/Modal/RegisterModal/RegisterModal';
import Button from './Components/Button/Button';
import Barchart from './Components/Charts/Barchart/Barchart';
import Piechart from './Components/Charts/Piechart/Piechart';


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
        },
        {
          id: 3,
          tipo: 'Receita',
          categoria: 'Supermercado',
          data: '2020-06-05',
          valor: '250.00',
          comentario: '',
        }
      ],
      searchTerm: '',
      showRegisterModal: false,
    };

    this.addElement = this.addElement.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  };

  addElement = (dados) => {
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

  handleRemove = id => {
    const newList = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: [...newList],
    });
  };

  editElement = (item, index) => {
    console.log(item);
    console.log(index);
    console.log(this.state.list);
    let newList = [...this.state.list]
    newList.splice(index, 1, item);
    console.log(newList);
    this.setState({
      list: [...newList],
    });
  };

  render() { 

    const { list, searchTerm, showRegisterModal } = this.state

    return (
      <Fragment>
        <Title>Controle Financeiro</Title>
        <div className="app-header">
          <Button variant="solid" backgroundColor="#4711B2" onClick={this.toggleRegisterModal}>+</Button>
          <RegisterModal show={showRegisterModal} handleClose={this.toggleRegisterModal} addElement={this.addElement}>Novo Cadastro</RegisterModal>
          <Search type="text" value={searchTerm} onChange={this.handleSearch}/>
        </div>
        <Table list = {list} searchTerm={searchTerm} editElement={this.editElement} onRemove={this.handleRemove}/>
        <div>
          <Piechart list={list}/>
          <Barchart list={list}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
