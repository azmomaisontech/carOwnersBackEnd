const fs = require("fs");
const mongoose = require("mongoose");
require("colors");
const dotenv = require("dotenv");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Load models
const Filter = require("./models/Filter");

// Connect to DB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Read JSON files
const filters = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/filters.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await Filter.create(filters);
    console.log("Data Imported...".green);
    process.exit(1);
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await Filter.deleteMany();
    console.log("Data Destroyed...".red);
    process.exit(1);
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
