const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
const db = {};
db.url = dbConfig.url;
db.mongoose = mongoose;
db.tutorials = require("./tutorial.model.js")(mongoose);
module.exports = db;
