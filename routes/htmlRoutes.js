//Dependencies
var path = require("path");
var db = require("../models");
var path = require("path");

module.exports = function(app) {

//index Route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

// blog route loads blog.html
app.get("/blog", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/views/blog.html"));
});

// Render 404 page for any unmatched routes
app.get("*", function(req, res) {
  res.sendFile("404");
});
};