var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configuring the database
var dbConfig = require('./config/database.config');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)

mongoose.connection.on('error', function(){
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
})

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database!");
})

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', function(req, res){
    res.json({"message": "Welcome to Cadastra Car"});
});

//error handling middleware
app.use(function(err,req,res,next){
    res.status(422).send({error: err.message});
});

// Require Vehicle routes
require('./app/routes/vehicle.routes')(app);

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});