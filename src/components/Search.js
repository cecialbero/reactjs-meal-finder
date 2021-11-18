import React, { useContext } from 'react';
import useForm from './../hooks/useForm';
import MealsContext from './../context/Meals/MealsContext';

import './Search.scss';

const Search = () => {
    const mealsContext = useContext(MealsContext);
    
    const [ values, handleChange ] = useForm({
        ingredient: ''
    });
    const { ingredient } = values;

    const handleSubmit = e => {
        e.preventDefault();
        mealsContext.searchIngredient(ingredient);
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

export default Search