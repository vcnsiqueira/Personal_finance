import React, { Component, Fragment } from 'react';
import './App.css';

import Title from './Components/Title/Title';
import Form from './Components/Form/Form';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      elementos: [
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
      titulo: ['Categoria', 'Data', 'Valor'],
    };
  };

  handleSubmit = (dados) => {
    const elemento = {
      categoria: dados.categoria,
      data: dados.data,
      valor: dados.valor
    };
    this.setState({
      elementos: [...this.state.elementos, elemento]
    });

  }

  render() {  
    return (
      <Fragment>
        <Title>Controle Financeiro</Title>
        <Form handleSubmit={this.handleSubmit}/>
        <hr></hr>
        <Title>Tabela</Title>
        <table>
          <thead>
            <tr>
              {
                this.state.titulo.map(item => {
                  return(
                    <th>{item}</th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              this.state.elementos.map(elemento => {
                return(
                  <tr>
                    <td>{elemento.categoria}</td>
                    <td>{elemento.data}</td>
                    <td>{elemento.valor}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>      
      </Fragment>
    );
  }
}

export default App;
