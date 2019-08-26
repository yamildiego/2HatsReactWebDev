import {
    MOBILE_SET,
    SEARCH_MODAL_SET,
    DATE_SET,
    LOADING_SEARCH_SET,
    SEARCH_ITEMS_SET
} from './types';

const initialState = {
    isMobile: false,
    showSearch: false,
    dateSelected: new Date(),
    searchText: "",
    common: [],
    branded: []
}

export default function general(state = initialState, action = {}) {
    switch (action.type) {
        case MOBILE_SET:
            return { ...state, isMobile: action.isMobile };
        case SEARCH_MODAL_SET:
            if (action.searchVisible || (!action.searchVisible && (action.searchText === "")))
                return { ...state, searchVisible: action.searchVisible, searchText: action.searchText };
            else
                return { ...state, searchVisible: action.searchVisible };
        case DATE_SET:
            return { ...state, dateSelected: action.dateSelected };
        case LOADING_SEARCH_SET:
            return { ...state, loadingSearch: action.loadingSearch };
        case SEARCH_ITEMS_SET:
            return { ...state, ...action.response };
        default:
            return state;
    }
}

