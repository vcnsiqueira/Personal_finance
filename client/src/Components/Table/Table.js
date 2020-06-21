import React from 'react';
import PropTypes from 'prop-types';

const removeAccent = word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: ['Tipo', 'Categoria', 'Data', 'Valor', 'Comentário'],
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
                        return(
                            <th>{item}</th>
                        );
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