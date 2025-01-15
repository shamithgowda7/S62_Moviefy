if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}

const mongo_client = require("mongodb").MongoClient;

const connection = new mongo_client(process.env.MONGODB_URL_ATLAS);

async function getDB() {
  let db = connection.db("S62_Moviefy");
  db = db.collection("Users");
  return db;
}

module.exports = { getDB, connection };
