if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "../Config/.env",
  });
}

const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
      .connect(process.env.MONGODB_URL_ATLAS)
      .then((data) => {
        console.log(`MongoDB Connected: ${data.connection.host}`);
      })
      .catch((err) => {
        console.error(err);
      });
};

module.exports = connectDB;
