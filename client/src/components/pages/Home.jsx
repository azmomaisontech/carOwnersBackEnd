import React, { useEffect, useContext } from "react";
import FilterItem from "../layouts/FilterItem";
import CarsContext from "../../context/Cars/carsContext";
import Spinner from "../layouts/Spinner";

const Home = () => {
  const carsContext = useContext(CarsContext);
  const { getFilters, filters, loading } = carsContext;

  useEffect(() => {
    getFilters();
    //eslint-disable-next-line
  }, []);

  if (loading)
    return (
      <div className="spinner">
        <Spinner />
      </div>
    );

  if (!loading && filters.length === 0)
    return (
      <div className="container">
        <p>You have no filter parameters at this time, check in the future</p>
      </div>
    );

  return (
    <main>
      <div className="container">
        <h3>Filter</h3>
        <div className="filters">
          {filters &&
            filters.map(filter => (
              <FilterItem key={filter._id} filter={filter} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
