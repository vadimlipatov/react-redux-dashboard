export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const addFilter = (filter) => {
  return {
    type: "ADD_FILTER",
    filter,
  };
};
export const removeFilter = (filter) => {
  return {
    type: "REMOVE_FILTER",
    filter,
  };
};
export const clearFilter = () => {
  return {
    type: "CLEAR_FILTER",
  };
};
