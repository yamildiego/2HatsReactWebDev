import {
    CALORIES_SET
} from "./../Reducers/types";

export const caloriesSet = (intakeList) => {
    return (dispatch) => {
        let calories = getDataCalories(intakeList);
        dispatch({
            type: CALORIES_SET,
            data: calories
        });
    }
}

export const getDataCalories = (intakeList) => {
    let newState = {
        caloriesConsumed: 0,
        caloriesByMealType: {
            breakfast: 0,
            lunch: 0,
            dinner: 0,
            snack: 0
        }
    }

    intakeList.forEach(element => {
        newState.caloriesConsumed += parseInt(element.nfCalories);
        newState.caloriesByMealType[element.mealType] += parseInt(element.nfCalories);
    });

    return newState;
}

