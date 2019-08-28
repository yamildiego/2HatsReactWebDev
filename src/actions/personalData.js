import {
    PERSONAL_DATA_SET,
    INTAKE_LIST_SET
} from "./../Reducers/types";
import { getDateFormatted } from './../assets/utils/utils';
import dataJSON from './../data.json';
import * as actionsCalculatedInformation from './calculatedInformation';

export const personalDataSet = (data) => {
    return (dispatch) => {
        dispatch({
            type: PERSONAL_DATA_SET,
            data: { ...data }
        });
        dispatch(intakeListSet(new Date()));
    }
}

export const intakeListSet = (date) => {
    return (dispatch) => {
        let intakeList = getIntakeList(dataJSON.data_points, date);
        dispatch({
            type: INTAKE_LIST_SET,
            intakeList
        });

        dispatch(actionsCalculatedInformation.caloriesSet(intakeList));
    }
}

export const getIntakeList = (elements, date) => {
    let intakeList = [];

    elements.forEach((element) => {
        if (getDateFormatted(date) === element.date)
            intakeList = element.intake_list;
    });

    return intakeList;
}