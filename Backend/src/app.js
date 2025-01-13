if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/Config/.env",
  });
}

const userModel = require("./models/user.models.js");

const express = require("express");
const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/", (req, res) => {
  res.send("welcome to the back alley");
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new userModel({
      name: name,
      email: email,
      password: password,
    });
    await newUser.save();
    res.status(201).send({ message: "user created successfully", newUser });
  } catch (err) {
    res.status(400).send({ message: err.message, success: false });
  }
});

app.get("/users", async (req, res) => {
  try {
    const data = await userModel.find();

    res.status(200).send({ message: "Data fetched", data });
  } catch (err) {
    res.status(400).send({ message: err.message, success: false });
  }
});

module.exports = app;
