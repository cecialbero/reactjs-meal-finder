import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Meal from './Meal';

import './MealsList.scss';

const MealsList = ({ list }) => {

    return (
        <Fragment>
            {
                list ? <ul>
                    {
                        list.map(meal => {
                            return <li key={meal.idMeal}><Meal meals={meal}/></li>
                        })
                    }
                </ul>

                :

                <p>No results found</p>
            }
        </Fragment>
    )
}

MealsList.propTypes = {
    list: PropTypes.array
}

export default MealsList