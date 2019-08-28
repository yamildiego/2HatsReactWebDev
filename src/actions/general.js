import {
    MOBILE_SET,
    SEARCH_MODAL_SET,
    DATE_SET,
    LOADING_SEARCH_SET,
    SEARCH_ITEMS_SET,
    ADD_MODAL_SET,
    ITEM_FOOD_SELECTED_SET,
    LOADING_ADD_SET,
    SERVING_SIZE_SET,
    MEAL_TYPE_SELECTED_SET
} from "./../Reducers/types";
import * as actionsPersonalData from './personalData';
import Constants from './../config';

export const mobileSet = isMobile => ({
    type: MOBILE_SET,
    isMobile
})

let response = {
    "foods": [
        {
            "food_name": "white bread",
            "brand_name": null,
            "serving_qty": 0.5,
            "serving_unit": "slices",
            "serving_weight_grams": 15.53,
            "nf_calories": 41.3,
            "nf_total_fat": 0.52,
            "nf_saturated_fat": 0.11,
            "nf_cholesterol": 0,
            "nf_sodium": 76.08,
            "nf_total_carbohydrate": 7.67,
            "nf_dietary_fiber": 0.42,
            "nf_sugars": 0.88,
            "nf_protein": 1.37,
            "nf_potassium": 19.56,
            "nf_p": 15.22,
            "full_nutrients": [],
            "nix_brand_name": null,
            "nix_brand_id": null,
            "nix_item_name": null,
            "nix_item_id": null,
            "upc": null,
            "consumed_at": "2019-08-27T22:43:46+00:00",
            "metadata": {
                "is_raw_food": false
            },
            "source": 1,
            "ndb_no": 18069,
            "tags": {
                "item": "white bread",
                "measure": "slices",
                "quantity": "0.50",
                "food_group": 5,
                "tag_id": 227
            },
            "alt_measures": [],
            "lat": null,
            "lng": null,
            "meal_type": 5,
            "photo": {
                "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/227_thumb.jpg",
                "highres": "https://d2xdmhkmkbyw75.cloudfront.net/227_highres.jpg",
                "is_user_uploaded": false
            },
            "sub_recipe": null
        }
    ]
};

export const searchModalSet = (searchVisible, searchText) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_MODAL_SET,
            searchVisible,
            searchText
        })

        if (searchText !== "") {
            dispatch(loadingSearchSet(true));
            fetch(Constants.API + "/v2/search/instant?query=" + searchText, {
                headers: {
                    "x-user-jwt": Constants.USER_JWT,
                    "x-app-id": Constants.API_ID,
                    "x-app-key": Constants.API_KEY
                }
            }).then(response => response.json()).then((response) => {
                dispatch(searchItemsSet(response));
                dispatch(loadingSearchSet(false));
            });
        }
    }
}

export const DateSet = (dateSelected, dataPoints) => {
    return (dispatch) => {
        dispatch({
            type: DATE_SET,
            dateSelected
        });
        dispatch(actionsPersonalData.intakeListSet(dataPoints, dateSelected))
    }
}

export const addModalSet = (addVisible) => ({
    type: ADD_MODAL_SET,
    addVisible
})

export const loadingSearchSet = (loadingSearch) => ({
    type: LOADING_SEARCH_SET,
    loadingSearch
})

export const searchItemsSet = (response) => ({
    type: SEARCH_ITEMS_SET,
    response
})

export const loadingAddSet = (loadingAdd) => ({
    type: LOADING_ADD_SET,
    loadingAdd
})

export const servingSizeSet = (servingSize) => ({
    type: SERVING_SIZE_SET,
    servingSize
})

export const mealTypeSelectedSet = (mealTypeSelected) => ({
    type: MEAL_TYPE_SELECTED_SET,
    mealTypeSelected
})

export const itemFoodSelectedSet = (serving_qty, serving_unit, food_name) => {
    return (dispatch) => {
        let itemFoodSelected = null;
        dispatch(addModalSet(true));
        dispatch(loadingAddSet(true));
        // fetch(Constants.API + "/v2/natural/nutrients", {
        //     method: 'POST',
        //     body: '{ "query": "' + serving_qty + ' ' + serving_unit + ' ' + food_name + '" }',
        //     headers: {
        //         "x-user-jwt": Constants.USER_JWT,
        //         "x-app-id": Constants.API_ID,
        //         "x-app-key": Constants.API_KEY,
        //         'Content-Type': 'application/json',
        //         'accept': 'application/json'
        //     }
        // }).then(response => response.json()).then((response) => {
        if (response.foods.length > 0)
            itemFoodSelected = response.foods[0];
        if (itemFoodSelected != null) {
            dispatch({
                type: ITEM_FOOD_SELECTED_SET,
                itemFoodSelected
            })
            dispatch(loadingAddSet(false));
        }
        // });
    }
}
