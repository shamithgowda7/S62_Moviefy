if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/Config/.env",
  });
}

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to the back alley");
});

module.exports = app;
