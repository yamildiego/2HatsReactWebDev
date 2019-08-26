import {
    MOBILE_SET,
    SEARCH_MODAL_SET,
    DATE_SET
} from "./../Reducers/types";

export const mobileSet = isMobile => ({
    type: MOBILE_SET,
    isMobile
})

export const searchModalSet = searchVisible => ({
    type: SEARCH_MODAL_SET,
    searchVisible
})

export const DateSet = dateSelected => ({
    type: DATE_SET,
    dateSelected
})