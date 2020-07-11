import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';

const Search = ({ value, onChange }) => {
    
    return(
        <Input type="text" value={value} onChange={onChange} placeholder="Buscar"/>
    );
};

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Search;