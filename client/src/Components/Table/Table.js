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
            showConfirmModal: null,
            sortConfig: {
                key: null,
                direction: null,
            },
            sortedList: [],
        };

        this.openConfirmModal = this.openConfirmModal.bind(this);
        this.closeConfirmModal = this.closeConfirmModal.bind(this);
        this.requestSort = this.requestSort.bind(this);
    };

    openConfirmModal = item => {
        this.setState({
          showConfirmModal: item,
        });
    };

    closeConfirmModal = () => {
        this.setState({
            showConfirmModal: null,
        });
    };

    sortList = () => {
        let sortableList = [...this.props.list];
        sortableList.sort((a, b) => {
            if(a[this.state.sortConfig.key] < b[this.state.sortConfig.key]) {
                return this.state.sortConfig.direction === 'ascending' ? -1 : 1;
            };
            if(a[this.state.sortConfig.key] > b[this.state.sortConfig.key]) {
                return this.state.sortConfig.direction === 'ascending' ? 1 : -1;
            };
            return 0;
        });
        console.log(sortableList);
        this.setState({
            sortedList: sortableList,
        })
    };

    requestSort = name => {
        let direction = 'ascending';
        const newKey = removeAccent(name.toLowerCase());
        console.log(`A coluna clicada foi ${newKey}`);
        console.log(`sortConfig.key atual é ${this.state.sortConfig.key}`)
        console.log(`sortConfig.direction atual é ${this.state.sortConfig.direction}`)
        if (this.state.sortConfig.key === newKey && this.state.sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        this.setState({
            sortConfig: {
                key: newKey,
                direction: direction,
            },
        });
        this.sortList();
    };

    render() {

        const { header, showConfirmModal, sortConfig, sortedList } = this.state;
        const { list, searchTerm, onRemove } = this.props;

        const showList = sortedList.length > 0 ? sortedList : list; 

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                        {
                            header.map((item, index) => {
                                if(item !== 'Ações'){ 
                                    return(<th key={index} onClick={() => this.requestSort(item)}>{item}<Icon color='#FFF'><i className="fas fa-sort"/></Icon></th>);
                                }
                                return(<th key={index}>{item}</th>);
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showList.filter(item => removeAccent(item.categoria).toLowerCase().includes(removeAccent(searchTerm).toLowerCase())).map(item => {
                                return(
                                <tr key={item.id}>
                                    <td>{item.tipo}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.data}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.comentario}</td>
                                    <td>
                                        <Icon color='#4711B2' border hover><i className="fas fa-pencil-alt"/></Icon>
                                        <Icon color='#4711B2' border hover onClick={() => this.openConfirmModal(item)}><i className="fas fa-trash-alt"/></Icon>
                                        <ConfirmModal show={showConfirmModal === item} handleClose={this.closeConfirmModal} element={item} onRemove={onRemove}>Excluir</ConfirmModal>
                                    </td>
                                </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
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