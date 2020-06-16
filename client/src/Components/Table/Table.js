import React from 'react';
//import PropTypes from 'propt-types';

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: ['Categoria', 'Data', 'valor'],
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
                        list.filter(item => item.categoria.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
                            return(
                            <tr>
                                <td>{item.categoria}</td>
                                <td>{item.data}</td>
                                <td>{item.valor}</td>
                            </tr>
                            );
                        })
                    }
                </tbody>
            </table>    
        )
    };
};

export default Table;