import React, { useState } from 'react';
import Axios from 'axios';

import Search from './components/Search';
import MealsList from './components/MealsList';
import Alert from './components/Alert';

import './App.scss';

const App = () => {
  const [mealsList, setMealsList] = useState([]);
  const [msg, setMsg] = useState();

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

  const alertMsg = txt => {
    console.log(txt)
    setMsg(txt)
  }

  return (
    <section>
      <h1>Meal Finder</h1>
      <Search searchIngredient={searchIngredient} alertMsg={alertMsg}/>
      <Alert msg={msg}/>
      <MealsList list={mealsList}/>
    </section>
  );
}

export default App;
