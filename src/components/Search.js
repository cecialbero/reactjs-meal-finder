import React from 'react';
import PropTypes from 'prop-types';
import useForm from './../hooks/useForm';

import './Search.scss';

const Search = ({ searchIngredient }) => {
    const [ values, handleChange ] = useForm({
        ingredient: ''
    });
    const { ingredient } = values;

    const handleSubmit = e => {
        e.preventDefault();
        searchIngredient(ingredient);
        values.ingredient = '';
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