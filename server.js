//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//create server and set default port
var app = express();
var port = process.env.PORT || 8080;

// Requiring our models for syncing
var models = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// USED THIS THE FIRST TIME. REMOVE?Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//handlebars boilerplate
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================
// Import routes and give the server access to them.
var routes = require("./controllers/ufo_controller.js");

app.use("/", routes);
//require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our express app
models.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("Listening on PORT " + port);
  });//listener
});//sequelize sync