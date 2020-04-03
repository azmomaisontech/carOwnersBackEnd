const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const carowners = require("./routes/carOwners");
const filters = require("./routes/filters");

//Load all config variables
dotenv.config({ path: "./config/config.env" });

//Connect Database
connectDB();

//Enable Cors for Public Access
app.use(cors());

//Dev logger
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use("/api/v1/carowners", carowners);
app.use("/api/v1/filters", filters);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set statuc folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

//Load errorHandler
app.use(errorHandler);

//Declare env var
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

//load server
const server = app.listen(
  PORT,
  console.log(`Server running in ${MODE} mode on port ${PORT}`)
);

// Unhandled Promise Rejection Error
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);

  // If error, stop server and exit
  server.close(() => process.exit(1));
});
