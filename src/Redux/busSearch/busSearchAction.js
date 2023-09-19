import * as types from "./actionType";

export const busSearch = (user) => {
  return {
    type: types.BUS_SEARCH_SUCCESS,
    payload: user,
  };
};

export const busSearchAction = (user) => {
  console.log("data",user);
  if (user) {
    return {
      type: types.BUS_SEARCH_REQUEST,
      payload: user,
    };
  }
};

export const clearBusSearchReducer = () => {
  return {
    type: types.CLEAR_BUS_SEARCH_REDUCER,
  };
};
