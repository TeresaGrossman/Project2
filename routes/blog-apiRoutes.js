var db = require("../models");

module.exports = function(app) {
  // Get all blogs
  app.get("/api/blogs", function(req, res) {
    db.Blogs.findAll({}).then(function(dbBlogs) {
      res.json(dbBlogs);
    });
  });
   // Get route for retrieving a single post
  app.get("/api/blog/omdbMovieName/:omdbMovieName", function(req, res) {
    db.Blogs.findAll({
      where: {
        omdbMovieName: req.params.omdbMovieName
      }
    })
      .then(function(dbBlogs) {
        res.json(dbBlogs);
      });
     });

  // POST route for saving a new post
     app.post("/api/blogs",function(req,res){
        db.Blogs.create({
        parent_id:req.body.parent_id,
        moviePost:req.body.moviePost,
        omdbMovieID: req.body.omdbMovieID,
        omdbMovieName: req.body.omdbMovieName,
        movieRating: req.body.movieRating
       })
       .then(function(dbBlog) {
        res.json(dbBlog);
     });
    });

  };