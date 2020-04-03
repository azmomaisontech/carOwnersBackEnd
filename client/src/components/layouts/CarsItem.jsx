import React from "react";
import image from "../../img/car.svg";
import PropTypes from "prop-types";

const CarItem = ({ car }) => {
  const {
    first_name,
    last_name,
    car_model,
    car_model_year,
    country,
    gender,
    job_title,
    email
  } = car;

  let backgroundColor = car.car_color;

  return (
    <div className="cars">
      <div className="car-image">
        <img src={image} alt="Car" />
      </div>
      <div className="car-info">
        <div className="name">
          <h4>
            {first_name} {last_name}
          </h4>
        </div>
        <div className="car-name">
          <span className="brand">
            <span>Brand</span> {car_model}
          </span>
          <span className="year">
            <span>Year</span> {car_model_year}
          </span>

          <span className="carcolor">
            <span>Color</span>
            <span style={{ backgroundColor }} className="color"></span>
          </span>
        </div>
        <div className="owner-info">
          <span className="ownercountry">
            <span>Country</span> {country}
          </span>
          <span className="gender">
            <span>Gender</span> {gender}
          </span>
          <span className="job">
            <span>Job</span> {job_title}
          </span>
        </div>
        <div className="email">
          <p>
            <span>Email: </span> {email}
          </p>
        </div>
        <div className="bio">
          <p>
            <span> Bio: </span>{" "}
            {car.bio[0] === '"' ? (car.bio = car.bio.substring(1)) : car.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarItem;
