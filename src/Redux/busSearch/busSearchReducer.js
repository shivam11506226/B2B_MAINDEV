import * as types from "./actionType";

const initState = {
  busResult: [],
  busBlock:[],
  busBook:[],
  isLoading: false,
  isError: false,
  isLoadingBlockBus:false,
  isLoadingBook:false,
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
    case types.BUS_BLOCK_REQUEST:
      return {
        ...state,
        isLoadingBlockBus: true,
        isError: false,
      };
    case types.BUS_BLOCK_SUCCESS:
      return {
        ...state,
        busBlock: payload,
        isLoadingBlockBus:true,
        isError: false,
        showSuccessMessage: true,
      };
      case types.BUS_BOOK_REQUEST:
        return{
          ...state,
          isLoadingBook:true,
          isError:false
        }
      case types.BUS_BOOK_SUCCESS:
        return{
          ...state,
          busBook:payload,
          isLoadingBook:true,
          isError:false,
          showSuccessMessage:true
        }  

    default:
      return state;
  }
};
