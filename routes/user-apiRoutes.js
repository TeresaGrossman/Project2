var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/users/userName/:userName", function(req, res) {
    db.Users.findAll({
      where: {
        userName: req.params.userName
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // POST route for saving a new post
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  // PUT route for updating user
  app.put("/api/users", function(req, res) {
    db.Users.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
