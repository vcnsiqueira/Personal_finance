import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableBody, TableRow, TableHeaderCell, TableCell } from './styled/Table.styled';

import Icon from '../Icon/Icon';
import ConfirmModal from '../Modal/ConfirmModal/ConfirmModal';
import EditModal from '../Modal/EditModal/EditModal';
import Tooltip from '../Tooltip/Tooltip';

const removeAccent = word => word.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

class DataTable extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: ['Tipo', 'Categoria', 'Data', 'Valor', 'Comentário', 'Ações'],
            showConfirmModal: null,
            showEditModal: null,
            sortConfig: {
                key: null,
                direction: null,
                class: 'sort'
            },
        };

        this.openConfirmModal = this.openConfirmModal.bind(this);
        this.closeConfirmModal = this.closeConfirmModal.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.requestSort = this.requestSort.bind(this);
        this.sortList = this.sortList.bind(this);
        this.selectIcon = this.selectIcon.bind(this);
    };

    openEditModal = item => {
        this.setState({
            showEditModal: item,
        });
    };

    closeEditModal = item => {
        this.setState({
            showEditModal: null,
        });
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
        if(this.state.sortConfig.key === 'valor') {
            sortableList.sort((a,b) => {
                if(parseFloat(a.valor) < parseFloat(b.valor)) {
                    return this.state.sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if(parseFloat(a.valor) > parseFloat(b.valor)) {
                    return this.state.sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
            return(sortableList);
        }
        sortableList.sort((a, b) => {
            if(a[this.state.sortConfig.key] < b[this.state.sortConfig.key]) {
                return this.state.sortConfig.direction === 'ascending' ? -1 : 1;
            };
            if(a[this.state.sortConfig.key] > b[this.state.sortConfig.key]) {
                return this.state.sortConfig.direction === 'ascending' ? 1 : -1;
            };
            return 0;
        });
        return(sortableList)
    };

    requestSort = name => {
        let direction = 'ascending';
        let iconClass = 'sort-up'
        const newKey = removeAccent(name.toLowerCase());
        if (this.state.sortConfig.key === newKey && this.state.sortConfig.direction === 'ascending') {
            direction = 'descending';
            iconClass = 'sort-down'; 
        }
        this.setState({
            sortConfig: {
                key: newKey,
                direction: direction,
                class: iconClass,
            },
        });
    };

    selectIcon = item => {
        if( removeAccent(item).toLowerCase() !== this.state.sortConfig.key){
            return(['sort','#FFF']);
        };
        return([this.state.sortConfig.class,'#FF9626']);
    }

    render() {

        const { header, showConfirmModal, sortConfig, showEditModal } = this.state;
        const { list, searchTerm, onRemove, editElement } = this.props;

        const showList = sortConfig.key !== null ? this.sortList() : list; 

        return(
            <Table>
                <TableHeader>
                    <TableRow>
                    {
                        header.map((item, index) => {
                            if(item !== 'Ações'){ 
                                return(<TableHeaderCell key={index} onClick={() => this.requestSort(item)}>{item}<Icon color={this.selectIcon(item)[1]}><i className={`fas fa-${this.selectIcon(item)[0]}`}/></Icon></TableHeaderCell>);
                            }
                            return(<TableHeaderCell key={index}>{item}</TableHeaderCell>);
                        })
                    }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        showList.filter(item => removeAccent(item.categoria).toLowerCase().includes(removeAccent(searchTerm).toLowerCase())).map((item, index) => {
                            return(
                            <TableRow key={item.id}>
                                <TableCell>{item.tipo}</TableCell>
                                <TableCell>{item.categoria}</TableCell>
                                <TableCell>{item.data}</TableCell>
                                <TableCell>{item.valor}</TableCell>
                                <TableCell>{item.comentario}</TableCell>
                                <TableCell>
                                    <Tooltip title="Editar" direction="top">
                                        <Icon color='#4711B2' border hover onClick={() => this.openEditModal(item)}><i className="fas fa-pencil-alt"/></Icon>
                                    </Tooltip>
                                    <EditModal show={showEditModal === item} element={item} index={index} handleClose={this.closeEditModal} editElement={editElement}>Editar Cadastro</EditModal>
                                    <Tooltip title="Apagar" direction="top">
                                        <Icon color='#4711B2' border hover onClick={() => this.openConfirmModal(item)}><i className="fas fa-trash-alt"/></Icon>
                                    </Tooltip>
                                    <ConfirmModal show={showConfirmModal === item} handleClose={this.closeConfirmModal} element={item} onRemove={onRemove}>Excluir</ConfirmModal>
                                </TableCell>
                            </TableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        )
    };
};

DataTable.propTypes = {
    header: PropTypes.array,
    list: PropTypes.array,
    searchTerm: PropTypes.string,
    onRemove: PropTypes.func,
}

export default DataTable;