const advancedQuery = (model, searchModel) => async (req, res, next) => {
  let query;
  let field;
  let searchParams = req.params.id;

  //Search params
  field = await searchModel.findById(searchParams);

  //querying the database
  query = model.find();

  //Gender Field
  if (field.gender !== "") {
    let firstLetter = field.gender.slice(0, 1).toUpperCase();
    let secondLetter = field.gender.slice(1);
    let gender = firstLetter + secondLetter;

    query = query.find({ gender });
  }

  //Start year and end year field
  if (field.start_year && field.eng_year) {
    query = query.find({
      car_model_year: { $gte: field.start_year, $lte: field.end_year }
    });
  }

  //countries
  if (field.country.length !== 0) {
    query = query.find({
      country: { $in: [...field.country] }
    });
  }

  //car colors
  if (field.car_color.length !== 0) {
    query = query.find({ car_color: { $in: [...field.car_color] } });
  }

  //Pagination
  const page = parseInt(req.query.page || 1, 10);
  const limit = parseInt(req.query.limit || 50, 10);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();

  query = query.skip(startIndex).limit(limit);

  //Sending a response to the client
  const result = await query;

  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.advancedQuery = {
    success: true,
    pagination,
    data: result
  };

  next();
};

module.exports = advancedQuery;
