import {
    CALORIES_SET
} from "./../Reducers/types";

export const caloriesSet = caloriesConsumed => ({
    type: CALORIES_SET,
    caloriesConsumed
})