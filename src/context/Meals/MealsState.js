import React, { useReducer } from 'react';
import Axios from 'axios';
import MealsContext from './MealsContext';
import MealsReducer from './MealsReducer';
import { SEARCH_INGREDIENT, SET_INGREDIENT } from './../types';

const MealsState = props => {
    const initialState = {
        ingredient: '',
        meals: []
    }

    const [state, dispatch] = useReducer(MealsReducer, initialState);

    const searchIngredient = ingredient => {
        dispatch({type: SET_INGREDIENT, payload: ingredient});

        Axios({
            url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredient}`
        })
        .then((res) => {
            dispatch({type: SEARCH_INGREDIENT, payload: res.data.meals})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return <MealsContext.Provider value={{
        ingredient: state.ingredient,
        meals: state.meals,
        searchIngredient
    }}>
        {props.children}
    </MealsContext.Provider>
}

export default MealsState