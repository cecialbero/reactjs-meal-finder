import React, { useState } from 'react';

import './Search.scss';

const Search = (props) => {
    const [ingredient, setIngredient] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);

    const handleInputChange = e => {
        setIngredient(e.target.value);
        setIsEmpty(false);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.searchIngredient(ingredient);

        setIngredient('');
        setIsEmpty(true);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
            type='text' 
            placeholder='Enter an ingredient'
            name="ingredient"
            value={ingredient}
            onChange={handleInputChange} />
            <input
            disabled={isEmpty}
            type='submit' 
            value='Search'/>
        </form>
    )
}

export default Search