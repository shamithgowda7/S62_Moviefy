if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/Config/.env",
  });
}

const connectDB = require("./DB/database.js");

const app = require("./app.js");
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  connectDB();
  console.log(`server started at port http://localhost:${port}`);
});
