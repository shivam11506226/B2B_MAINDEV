import * as types from "./actionType";

const initState = {
  busResult: [],

  isLoading: false,

  isError: false,

  showSuccessMessage: false,
};

export const busSearchReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.BUS_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.BUS_SEARCH_SUCCESS:
      return {
        ...state,
        busResult: payload,
        isLoading: false,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};
