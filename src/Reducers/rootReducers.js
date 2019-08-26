import { combineReducers } from "redux";
import general from "./general";
import personal from "./personalData";

export default combineReducers({
    general,
    personal,
});