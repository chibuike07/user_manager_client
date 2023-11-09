import { combineReducers } from "@reduxjs/toolkit";
import registerReducer from "./registerReducer";
export const rootReducer = combineReducers({
  registerReducer,
});
