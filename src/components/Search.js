import React, { useState } from 'react';
import PropType from 'prop-types';

import './Search.scss';

const Search = (props) => {
    const [ingredient, setIngredient] = useState('');

    const handleOnInputChange = e => {
        setIngredient(e.target.value);
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if(ingredient === '') {
            props.alertMsg('You must insert an ingredient')
        } else {
            props.searchIngredient(ingredient);
            setIngredient('');
        }
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input 
            type='text' 
            placeholder='Enter an ingredient'
            name='ingredient'
            value={ingredient}
            onChange={handleOnInputChange} />
            <input
            type='submit' 
            value='Search'/>
        </form>
    )
}

export default Search;

Search.PropType = {
    searchIngredient: PropType.func.isRequired,
    alertMsg: PropType.func
}