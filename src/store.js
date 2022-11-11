import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "features/filter/filter-slice";
import { positionReducer } from "features/position/position-slice";

// import { combineReducers, createStore } from "redux";

// const rootReducer = combineReducers({
//   filters: filterReducer,
//   positions: positionReducer,
// });

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    positions: positionReducer,
  },
  devTools: true,
});
