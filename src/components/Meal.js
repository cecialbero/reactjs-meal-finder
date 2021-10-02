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