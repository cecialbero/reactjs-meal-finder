import React, { useState } from 'react';
import Axios from 'axios';

import Search from './components/Search';
import MealsList from './components/MealsList';

import './App.scss';

const App = () => {
  const [mealsList, setMealsList] = useState([]);

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
  }

  return (
    <section>
      <h1>Meal Finder</h1>
      <Search searchIngredient={searchIngredient}/>
      <MealsList list={mealsList}/>
    </section>
  );
}

export default App;
