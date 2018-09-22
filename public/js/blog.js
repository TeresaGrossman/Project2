$(document).ready(function() {

//Where API should appear
var blogContainer = $(".blog-container");

//Get Blogs on page load
getBlogs();

// Get references to page elements
var omdbMovieName = $("#omdbMovieName");
var moviePost = $("#moviePost");
var userName = $("#userName");
var movieRating = $("#movieRating");

var API = {
    getBlogs: function() {
      return $.ajax({
        url: "api/blog",
        type: "GET"
      });
    },
    postBlog: function(data) {
        return $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "api/blog",
          data: JSON.stringify(data)
        });
      },
    updateBlog: function(blog)
     $.ajax({
        method: "PUT",
        url: "/api/blog",
        data: todo
      }).then(getTodos);
    }
  
  };

// refreshExamples gets new examples from the db and repopulates the list
var refreshBlog = function() {
    API.getBlog().then(function(data) {
      var $examples = data.map(function(example) {
        var $a = $("<a>")
          .text(example.text)
          .attr("href", "/example/" + example.id);
  
        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": example.id
          })
          .append($a);
  
        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");
  
        $li.append($button);
  
        return $li;
      });
  
      $exampleList.empty();
      $exampleList.append($examples);
    });
  };


