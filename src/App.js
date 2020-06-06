import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

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
    }
  }

  render() {  
    return (
      <Fragment>
        <h1>Cadastro de despesa</h1>
        <form>
          <label for="categoria">Categoria:</label>
          <input type="text" id="category" name="category" value="Supermercado"/>
          <label for="data">Data:</label>
          <input type="date" id="date" name="date"/>
          <label for="valor">Categoria:</label>
          <input type="number" id="valor" name="valor" value="100.00"/>
          <button type="submit">Enviar</button>
        </form>
        <hr></hr>
        <h1>Tabela</h1>
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
