import {
  GET_CARS,
  CLEAR_CARS,
  GET_FILTERS,
  CLEAR_FILTERS,
  SET_LOADING
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        cars: action.payload.data,
        pagination: action.payload.pagination,
        loading: false
      };
    case CLEAR_CARS: {
      return {
        ...state,
        cars: [],
        pagination: null
      };
    }
    case GET_FILTERS:
      return {
        ...state,
        filters: action.payload.data,
        loading: false
      };
    case CLEAR_FILTERS: {
      return {
        ...state,
        filters: []
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
