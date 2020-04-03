import React, { useReducer } from "react";
import CarsReducer from "./carsReducer";
import CarsContext from "./carsContext";
import axios from "axios";
import {
  GET_CARS,
  CLEAR_CARS,
  GET_FILTERS,
  CLEAR_FILTERS,
  SET_LOADING
} from "../type";

const CarsState = props => {
  const initialState = {
    cars: [],
    filters: [],
    pagination: null,
    loading: false
  };

  const [state, dispatch] = useReducer(CarsReducer, initialState);

  //Get cars according to filter parameters

  const getCars = async (filterId, page = 1) => {
    setLoading();
    try {
      const res = await axios.get(`/api/v1/carowners/${filterId}?page=${page}`);
      dispatch({
        type: GET_CARS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  const clearCars = () => {
    dispatch({
      type: CLEAR_CARS
    });
  };

  //Get filter parameters
  const getFilters = async () => {
    setLoading();
    try {
      const res = await axios.get("/api/v1/filters");
      dispatch({
        type: GET_FILTERS,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  const clearFilters = () => {
    dispatch({
      type: CLEAR_FILTERS
    });
  };

  //   Set Loading to true
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };

  return (
    <CarsContext.Provider
      value={{
        cars: state.cars,
        filters: state.filters,
        loading: state.loading,
        getCars,
        clearCars,
        getFilters,
        clearFilters
      }}
    >
      {props.children}
    </CarsContext.Provider>
  );
};

export default CarsState;
