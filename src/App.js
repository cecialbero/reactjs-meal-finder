import React, { useState } from 'react';
import Axios from 'axios';

import Search from './components/Search';
import MealsList from './components/MealsList';
import { MealsContext } from './context/MealsContext';

import './App.scss';

const App = () => {
  const [mealsList, setMealsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchIngredient = ingredient => {
    Axios({
      url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`
    })
    .then((res) => {
      setMealsList(res.data.meals)
    })
    .catch((error) => {
      console.log(error)
    })

    setSearchTerm(ingredient)
  }

  const mealsContext = {
    meals: mealsList,
    ingredient: searchTerm
  }

  return (
    <MealsContext.Provider value={mealsContext}>
      <section>
        <h1>Meal Finder</h1>
        <Search searchIngredient={searchIngredient}/>
        <MealsList/>
      </section>
    </MealsContext.Provider>
  );
}

export default App;
