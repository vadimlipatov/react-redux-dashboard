import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from "./filter-actions";

//Reducer
const filterReducer = (state = [], action) => {
  if (action.type === ADD_FILTER) {
    if (!state.includes(action.filter)) {
      return [...state, action.filter];
    }
  }
  if (action.type === REMOVE_FILTER) {
    return state.filter((item) => {
      return item !== action.filter;
    });
  }
  if (action.type === CLEAR_FILTER) {
    return [];
  }
  return state;
};

export default filterReducer;
