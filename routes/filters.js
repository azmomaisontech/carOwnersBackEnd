const express = require("express");
const router = express.Router();
const Filter = require("../models/Filter");
const asyncHandler = require("../middleware/async");

//@desc Get CarOwners Info
//@route GET /api/v1/filters
//@access Public
router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const filter = await Filter.find();

    res.status(200).send({
      success: true,
      data: filter
    });
  })
);

module.exports = router;
