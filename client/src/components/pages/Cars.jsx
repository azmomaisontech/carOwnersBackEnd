import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import Spinner from "../layouts/Spinner";
import CarsContext from "../../context/Cars/carsContext";
import CarItem from "../layouts/CarsItem";

const Cars = props => {
  const carsContext = useContext(CarsContext);
  const { clearFilters, getCars, cars, loading } = carsContext;

  useEffect(() => {
    const values = queryString.parse(props.location.search);
    getCars(props.match.params.id, values.page);

    return () => {
      clearFilters();
    };

    //eslint-disable-next-line
  }, [props.location.search]);

  if (loading)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );

  if (!loading && cars.length === 0)
    return (
      <div className="container">
        <p>No Car matched this search parameter, check in the future</p>
      </div>
    );
  return (
    <header>
      <div className="container">
        <h3>Car Owners Page</h3>
        <Link className="btn" to="/">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        <div className="filters">
          {cars && cars.map(car => <CarItem key={car._id} car={car} />)}
        </div>
      </div>
    </header>
  );
};

export default Cars;
