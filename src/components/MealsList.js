import React, { useContext } from 'react';

import MealsContext from './../context/Meals/MealsContext';
import Meal from './Meal';

import './MealsList.scss';

const MealsList = () => {
    
    const mealsContext = useContext(MealsContext);

    console.log(mealsContext)

    const { meals, ingredient } = mealsContext;

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