import React from 'react';

import Search from './components/Search';
import MealsList from './components/MealsList';
import MealsState from './context/Meals/MealsState';

import './App.scss';

const App = () => {
 
  return (
    <MealsState>
      <section>
        <h1>Meal Finder</h1>
        <Search/>
        <MealsList/>
      </section>
    </MealsState>
  );
}

export default App;
