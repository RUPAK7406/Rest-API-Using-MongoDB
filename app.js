const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub');
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true, useUnifiedTopology : true});

var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

const apiRoutes = require("./routes/api-routes");

app.get('/', function(req,res){
    res.send("Hello World With Node JS");
});

app.use('/api',apiRoutes);

app.listen(port, function(req,res){
    console.log(`My App listening to : ${port}`);
});