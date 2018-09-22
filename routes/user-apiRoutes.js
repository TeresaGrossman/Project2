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
    })
      .then(function(dbUsers) {
        res.json(dbUsers);
      });
     });
     
      // POST route for saving a new post
      app.post("/api/users",function(req,res){
        db.Users.create({
            firstName: req.body.firstName,
            lastName: req.body. lastName,
            emailAddress: req.body.emailAddress,
            password:req.body.password,
            userName:req.body.userName
        })
        .then(function(dbUsers) {
            res.json(dbUser);
        });
      });
    };