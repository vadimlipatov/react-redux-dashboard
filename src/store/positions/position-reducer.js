import { ADD_POSITIONS } from "./position-actions";
//Reducer

const positionReducer = (state = [], action) => {
  if (action.type === ADD_POSITIONS) {
    return action.positions;
  }

  return state;
};

export default positionReducer;
