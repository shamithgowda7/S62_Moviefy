if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./src/Config/.env",
  });
}

const app = require("./app.js");
const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  console.log(`server started at port http://localhost:${port}`);
});
