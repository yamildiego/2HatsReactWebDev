import {
    MOBILE_SET,
    SEARCH_MODAL_SET,
    DATE_SET
} from './types';

const initialState = {
    isMobile: false,
    showSearch: false,
    dateSelected: new Date()
}

export default function general(state = initialState, action = {}) {
    switch (action.type) {
        case MOBILE_SET:
            return { ...state, isMobile: action.isMobile };
        case SEARCH_MODAL_SET:
            return { ...state, searchVisible: action.searchVisible };
        case DATE_SET:
            return { ...state, dateSelected: action.dateSelected };
        default:
            return state;
    }
}

