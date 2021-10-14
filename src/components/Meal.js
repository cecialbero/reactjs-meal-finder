import React from 'react';
import PropType from 'prop-types';
import './Meal.scss';

const Meal = ({meals}) => {

    return (
        <article>
            <img src={meals.strMealThumb} alt={meals.strMeal} />
            <h4>{meals.strMeal}</h4>
        </article>
    )
}

export default Meal;

Meal.PropType = {
    meals: PropType.object.isRequired
}