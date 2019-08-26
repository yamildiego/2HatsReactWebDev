import {
    MOBILE_SET,
    SEARCH_MODAL_SET,
    DATE_SET,
    LOADING_SEARCH_SET,
    SEARCH_ITEMS_SET
} from "./../Reducers/types";
import * as actionsPersonalData from './personalData';

export const mobileSet = isMobile => ({
    type: MOBILE_SET,
    isMobile
})

const api = "https://trackapi.nutritionix.com/v2/search/instant?query=";

export const searchModalSet = (searchVisible, searchText) => {
    return (dispatch) => {
        dispatch({
            type: SEARCH_MODAL_SET,
            searchVisible,
            searchText
        })

        if (searchText !== "") {
            dispatch(loadingSearchSet(true));
            fetch(api + searchText, {
                headers: {
                    "x-user-jwt": "0",
                    "x-app-id": "bba6581c",
                    "x-app-key": "573e14091d948b5f23abc52fccbb0442"
                }
            }).then(response => response.json()).then((response) => {
                dispatch(loadingSearchSet(false));
                dispatch(searchItemsSet(response));
            });
        }
    }
}

export const DateSet = (dateSelected, data) => {
    return (dispatch) => {
        dispatch({
            type: DATE_SET,
            dateSelected
        });
        dispatch(actionsPersonalData.intakeListSet(dateSelected))
    }
}

export const loadingSearchSet = (loadingSearch) => ({
    type: LOADING_SEARCH_SET,
    loadingSearch
})

export const searchItemsSet = (response) => ({
    type: SEARCH_ITEMS_SET,
    response
})