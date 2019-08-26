import {
    PERSONAL_DATA_SET
} from './types';

const initialState = {
    firstName: '',
    lastName: '',
    heightCM: 0,
    weightKG: 0,
    dailyGoal: 0,
    dataPoints: []
}

export default function personal(state = initialState, action = {}) {
    switch (action.type) {
        case PERSONAL_DATA_SET:
            return { ...action.data };
        default:
            return state;
    }
}