import {
    PERSONAL_DATA_SET,
    INTAKE_LIST_SET
} from './types';

const initialState = {
    firstName: '',
    lastName: '',
    heightCM: 0,
    weightKG: 0,
    dailyGoal: 0,
    intakeList: [],
    dataPoints: []
}

export default function personal(state = initialState, action = {}) {
    switch (action.type) {
        case PERSONAL_DATA_SET:
            return { ...state, ...action.data };
        case INTAKE_LIST_SET:
            return { ...state, intakeList: action.intakeList };
        default:
            return state;
    }
}