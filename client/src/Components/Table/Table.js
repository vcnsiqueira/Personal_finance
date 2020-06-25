import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

import Icon from '../Icon/Icon';
import ConfirmModal from '../Modal/ConfirmModal/ConfirmModal';

const removeAccent = word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: ['Tipo', 'Categoria', 'Data', 'Valor', 'Comentário', 'Ações'],
            showConfirmModal: false,
            sortedField: null,
        };

        this.toggleConfirmModal = this.toggleConfirmModal.bind(this);
    };

    toggleConfirmModal = event => {
        this.setState({
          showConfirmModal: !this.state.showConfirmModal,
        })
    }

    sortElement = name => {
        this.setState({
            sortedField: removeAccent(name.toLowerCase())
        });
    };

    render() {

        const { header, showConfirmModal } = this.state;
        const { list, searchTerm, onRemove } = this.props;

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                        {
                            header.map(item => {
                                if(item !== 'Ações'){ 
                                    return(<th>{item}<Icon color='#FFF' onClick={() => this.sortElement(item)}><i className="fas fa-sort"></i></Icon></th>);
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
                                <tr key={item.id}>
                                    <td>{item.tipo}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.data}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.comentario}</td>
                                    <td>
                                        <Icon color='#4711B2' border hover><i className="fas fa-pencil-alt"></i></Icon>
                                        <Icon color='#4711B2' border hover onClick={this.toggleConfirmModal}><i className="fas fa-trash-alt"></i></Icon>
                                    </td>
                                    <ConfirmModal show={showConfirmModal} handleClose={this.toggleConfirmModal} element={item} onRemove={onRemove}>Excluir</ConfirmModal>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                {console.log(this.state.sortedField)}
            </div>
        )
    };
};

Table.propTypes = {
    header: PropTypes.array,
    list: PropTypes.array,
    searchTerm: PropTypes.string,
    onRemove: PropTypes.func,
}

export default Table;