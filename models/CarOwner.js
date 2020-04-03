const mongoose = require("mongoose");

const CarOwnerSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please add a first name"]
  },
  last_name: {
    type: String,
    required: [true, "Please add a last name"]
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email"
    ]
  },
  country: {
    type: String,
    required: [true, "Please add a country"]
  },
  car_model: {
    type: String,
    required: [true, "Please add a car model"]
  },
  car_model_year: {
    type: String,
    required: [true, "Please add a car model year"]
  },
  car_color: {
    type: String,
    required: [true, "Please add a car color"]
  },
  gender: {
    type: String,
    required: [true, "Please add a gender"]
  },
  job_title: {
    type: String,
    required: [true, "Please add a job title"]
  },
  bio: {
    type: String,
    required: [true, "Please add a bio"]
  }
});

module.exports = mongoose.model("CarOwner", CarOwnerSchema);
