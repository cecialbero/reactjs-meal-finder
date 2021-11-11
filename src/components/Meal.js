import React from 'react';
import PropTypes from 'prop-types';

import './Meal.scss';

const Meal = ({ meals }) => {

    return (
        <article>
            <img src={meals.strMealThumb} alt={meals.strMeal} />
            <h4>{meals.strMeal}</h4>
        </article>
    )
}

Meal.propTypes = {
    meals: PropTypes.object.isRequired
}

export default Meal