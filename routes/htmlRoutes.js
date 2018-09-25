//Dependencies
var path = require("path");
var db = require("../models");
var path = require("path");

module.exports = function(app) {

//index Route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });

  // loginin route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/login.html"));
  });
  // signup route loads signup.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/signup.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/blog.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/404.html"));
  });
};
