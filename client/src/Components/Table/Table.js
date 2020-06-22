import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

import Icon from '../Icon/Icon';

const removeAccent = word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: ['Tipo', 'Categoria', 'Data', 'Valor', 'Comentário', 'Ações'],
        };
    };

    render() {

        const { header } = this.state;
        const { list, searchTerm } = this.props;

        return(
            <table>
                <thead>
                    <tr>
                    {
                        header.map(item => {
                            if(item !== 'Ações'){ 
                                return(<th>{item}<Icon color={'#FFF'}><i className="fas fa-sort"></i></Icon></th>);
                            }
                            return(<th>{item}</th>);
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        list.filter(item => removeAccent(item.categoria).toLowerCase().includes(removeAccent(searchTerm).toLowerCase())).map(item => {
                            return(
                            <tr>
                                <td>{item.tipo}</td>
                                <td>{item.categoria}</td>
                                <td>{item.data}</td>
                                <td>{item.valor}</td>
                                <td>{item.comentario}</td>
                                <td>
                                    <Icon color={'#4711B2'} border><i className="fas fa-pencil-alt"></i></Icon>
                                    <Icon color={'#4711B2'} border><i className="fas fa-trash-alt"></i></Icon>
                                </td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>    
        )
    };
};

Table.propTypes = {
    header: PropTypes.array,
    list: PropTypes.array,
    searchTerm: PropTypes.string,
}

export default Table;