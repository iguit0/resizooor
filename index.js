var express = require("express");
var bodyParser = require("body-parser");

// create express app
var app = express();

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuring the database
var dbConfig = require("./config/database.config");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.set("useNewUrlParser", true);

mongoose.connect(dbConfig.url);

mongoose.connection.on("error", function() {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});

mongoose.connection.once("open", function() {
  console.log("\nSuccessfully connected to the database ✅");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.json({ message: "Welcome to Cadastra Car" });
});

//error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

// Require Vehicle routes
require("./app/routes/vehicle.routes")(app);

app.listen(3000, function() {
  console.log("\nServer is listening on port 3000 🚀");
});
