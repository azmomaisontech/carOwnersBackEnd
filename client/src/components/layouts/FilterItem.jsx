import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FilterItem = ({ filter }) => {
  return (
    <Link to={`/cars/${filter._id}`}>
      <div className="year">
        <h3>
          {filter.start_year} - {filter.end_year}
        </h3>
      </div>
      <div className="gender">
        <p>
          {filter.gender === ""
            ? "Male & Female"
            : filter.gender === "male"
            ? "Male"
            : "Female"}
        </p>
      </div>
      <div className="country">
        {filter.country.length === 0
          ? "All Countries"
          : filter.country &&
            filter.country.map(country => <span>{country}</span>)}
      </div>
      <div className="color">
        {filter.car_color.length === 0
          ? "All Colors"
          : filter.car_color &&
            filter.car_color.map(backgroundColor => (
              <span style={{ backgroundColor }} className="color"></span>
            ))}
      </div>
    </Link>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.object.isRequired
};

export default FilterItem;
