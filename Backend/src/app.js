if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/Config/.env",
  });
}

const express = require("express");
const app = express();

app.use(express.json());

const { getDB, connection } = require("./DB/mongo.client.js");

const route = require("./Routes/route.js");

app.get("/", async (req, res) => {
  const checkStatus = await connection.connect();
  const readyState = connection.topology.isConnected()
    ? "connected"
    : "disconnected";
  res.send(`<h3>Database connection status: ${readyState}</h3>`);
});

app.use("/", route);

module.exports = app;
