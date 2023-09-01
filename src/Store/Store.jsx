import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Login/AuthSlice";

const rootReducer = combineReducers({
  auth: AuthReducer,
});
const store = configureStore({
  reducer: rootReducer,
  // You can add other store configuration options here if needed
});

export default store;
