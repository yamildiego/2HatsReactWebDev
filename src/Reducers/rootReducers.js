import { combineReducers } from "redux";
import general from "./general";
import personal from "./personalData";
import calculatedInformation from "./calculatedInformation";

export default combineReducers({
    general,
    personal,
    calculatedInformation
});