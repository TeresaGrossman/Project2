var db = require("../models");

module.exports = function(app) {
  // Get all Blogs
  app.get("/api/blogs", function(req, res) {
    db.Blog.findAll({}).then(function(dbBlog) {
      res.json(dbBlog);
    });
  });

  // Create a new blog
  app.post("/api/blogs", function(req, res) {
    db.Blog.create(req.body).then(function(dbBlog) {
      res.json(dbBlog);
    });
  });

  // PUT route for updating blog
  app.put("/api/blogs", function(req, res) {
    db.Blog.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBlog) {
      res.json(dbBlog);
    });
  });
};
