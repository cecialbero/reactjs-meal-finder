import React, { useContext } from 'react';

import { MealsContext } from './../context/MealsContext';
import Meal from './Meal';

import './MealsList.scss';

const MealsList = () => {
    
    let { meals, ingredient } = useContext(MealsContext);

    return (
        <>
            {
                meals && ingredient ?
                <>
                    <p>{meals.length} results found for "{ingredient}"</p>
                    <ul>
                        {
                            meals.map(meal => {
                                return <li key={meal.idMeal}><Meal meals={meal}/></li>
                            })
                        }
                    </ul>
                </>

                :

                ingredient = '' || !meals

                ?

                <p>No results found for "{ingredient}"</p>

                : <></>
            }
        </>
    )
}

export default MealsList