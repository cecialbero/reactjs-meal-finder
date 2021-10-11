import Meal from './Meal';

import './MealsList.scss';

const MealsList = ({ list }) => {

    return (
        <ul>
            {
                list.map(meal => {
                    return <li key={meal.idMeal}><Meal meals={meal}/></li>
                })
            }
        </ul>
    )
}

export default MealsList;