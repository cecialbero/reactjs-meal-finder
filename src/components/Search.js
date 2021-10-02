import React, { useState } from 'react';

import './Search.scss';

const Search = (props) => {
    const [data, setData] = useState({
        ingredient: ''
    })

    const handleInputChange = e => {
        setData({
            [e.target.name] : e.target.value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.searchIngredient(data.ingredient)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
            type='text' 
            placeholder='Enter an ingredient'
            name="ingredient"
            onChange={handleInputChange} />
            <input 
            type='submit' 
            value='Search'/>
        </form>
    )
}

export default Search;