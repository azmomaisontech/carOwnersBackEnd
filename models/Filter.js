const mongoose = require("mongoose");

const FilterSchema = new mongoose.Schema({
  start_year: {
    type: Number
  },
  end_year: {
    type: Number
  },
  gender: {
    type: String
  },
  country: {
    type: [String]
  },
  car_color: {
    type: [String]
  }
});

module.exports = mongoose.model("Filter", FilterSchema);
