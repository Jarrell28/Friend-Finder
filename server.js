// Dependencies
// =============================================================
var express = require("express");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3333;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./app/routing/htmlRoutes"))
app.use(require("./app/routing/apiRoutes"))

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});