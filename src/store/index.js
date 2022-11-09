import { combineReducers, createStore } from "redux";
import filterReducer from "./filters/filter-reducer";
import positionReducer from "./positions/position-reducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  positions: positionReducer,
});

export const store = createStore(
  rootReducer,
  //no pre-data,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.filters.subscribe(() => {
//   store.dispatch(selectVisiblePositions())
// })
