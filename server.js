var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");
require("dotenv").config();

var PORT = process.env.PORT;

const app = express();
app.use(express.static("public"));
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

// USING BELOW CONNECTION BC OF HEROKU
// mongoose.connect("mongodb://localhost:27017/newsapp", { useNewUrlParser: true });

var routesHTML = require("./controllers/html-routes");
app.use(routesHTML);
var routesAPI = require("./controllers/api-routes");
app.use(routesAPI);

app.get("*", function(req, res) {
    res.render("index", {title: "The More You Know"});
});

// REMOVE BC THIS IS ACCOUNTED FOR IN HTML ROUTES
// app.get("/", function(req, res) {
//     res.render("index", {title: "The More You Know"});
// });

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});