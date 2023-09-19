import * as types from "./oneWayActionType";

const initState = {
  oneWayData: [],

  isLoading: false,

  isError: false,

  showSuccessMessage: false,
};

export const oneWayReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ONE_WAY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.ONE_WAY_SUCCESS:
      return {
        ...state,
        oneWayData: payload,
        isLoading: false,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};
