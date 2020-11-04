import { Children } from 'react';
import {MEALS} from '../../data/dummy-data';
import {Toggle} from '../actions/mealAction'

const initState = {
    meals :  MEALS,
    filteredMeals : MEALS,
    favoriteMeals : []
}

const mealReducer = (state = initState, action) =>{
    switch (action.type){
        case "TOGGLE_FAVORITE":
            const findMeals = state.favoriteMeals.findIndex((check) => {
                return (check.id == action.mealId)
            })
            if(findMeals >=0){
                const updatestate = [...state.favoriteMeals]
                 updatestate.splice(findMeals, 1)
                return {
                    ...state,
                    favoriteMeals : updatestate
                }
            }else{
                const updatestate = state.meals.find((meal) =>{return (meal.id === action.mealId) })
                return {...state, favoriteMeals: state.favoriteMeals.concat(updatestate)}
            }
        default:
            return {
                ...state
            }
    }
}

export default mealReducer