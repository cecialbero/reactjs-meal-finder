import { SEARCH_INGREDIENT, SET_INGREDIENT } from './../types';

export default (state, action) => {
    switch(action.type) {
        case SET_INGREDIENT:
            return {
                ...state,
                ingredient: action.payload
            }
        case SEARCH_INGREDIENT:
            return {
                ...state,
                meals: action.payload
            }
        default:
            return state
    }
}