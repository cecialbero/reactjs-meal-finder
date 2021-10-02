import React, { Fragment } from 'react';
import Meal from './Meal';

const MealsList = ({ list }) => {

    return (
        <Fragment>
            {
                list.map(meal => {
                    return <Meal meals={meal}/>
                })
            }
        </Fragment>
    )
}

export default MealsList;