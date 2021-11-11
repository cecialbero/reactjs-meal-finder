import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

const Search = ({ searchIngredient }) => {
    const [ingredient, setIngredient] = useState('');

    const handleChange = e => {
        setIngredient(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        searchIngredient(ingredient);
        setIngredient('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <input 
            type='text' 
            placeholder='Enter an ingredient'
            name='ingredient'
            value={ingredient}
            onChange={handleChange} />

            <input
            type='submit' 
            value='Search'/>

        </form>
    )
}

Search.propTypes = {
    searchIngredient: PropTypes.func.isRequired
}

export default Search