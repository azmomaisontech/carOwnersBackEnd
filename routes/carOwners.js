const express = require("express");
const router = express.Router();
const CarOwner = require("../models/CarOwner");
const Filter = require("../models/Filter");
const asyncHandler = require("../middleware/async");
const advancedQuery = require("../middleware/advancedQuery");

//@desc Get CarOwners Info
//@route GET /api/v1/carowners
//@access Public
router.get(
  "/:id",

  advancedQuery(CarOwner, Filter),
  asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedQuery);
  })
);

module.exports = router;
