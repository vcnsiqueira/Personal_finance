import React from 'react';
import Input from '../Input/Input';

const Search = ({ value, onChange }) => {
    
    return(
        <Input type="text" value={value} onChange={onChange} placeholder="Buscar"/>
    );
};

export default Search;