import * as types from "./passengerActionType";

const initState = {
  passengersData: [],

  isLoading: false,

  isError: false,

  showSuccessMessage: false,
};

export const passengersReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.PASSENGERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.PASSENGERS_SUCCESS:
      return {
        ...state,
        passengersData: payload,
        isLoading: false,
        isError: false,
        showSuccessMessage: true,
      };

    default:
      return state;
  }
};
