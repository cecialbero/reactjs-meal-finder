import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Meal from './Meal';

import './MealsList.scss';

const MealsList = ({ list, term }) => {

    return (
        <Fragment>
            {
                list ?
                <>
                    <p>{list.length} results found for {term}</p>
                    <ul>
                        {
                            list.map(meal => {
                                return <li key={meal.idMeal}><Meal meals={meal}/></li>
                            })
                        }
                    </ul>
                </>

                :

                <p>No results found for {term}</p>
            }
        </Fragment>
    )
}

MealsList.propTypes = {
    list: PropTypes.array,
    term: PropTypes.string
}

export default MealsList