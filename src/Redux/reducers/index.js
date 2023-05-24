
import { combineReducers } from "redux";
import toastReducer from "./toastReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  users:usersReducer,
  toast:toastReducer
});