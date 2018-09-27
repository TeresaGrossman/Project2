// When user clicks blog submit
$(document).on("click", "#blog-submit", function(event) {
  event.preventDefault();
  // Make new Blog object
  var newBlog = {
    //omdbMovieName: $("#omdbMovieName").val().trim(),
    moviePost: $("#moviePost").val().trim(),
    userName: $("#userName").val().trim(),
    movieRating: $("#movieRating").val(),
    created_at: moment().format("YYYY-MM-DD HH:mm"),
    omdbMovieID: $(".selected").data("movie-id")
  };
  console.log(newBlog);
  // Send an AJAX POST-request with jQuery
  $.post("/api/blogs", newBlog)
  // On success, run the following code
    .then(function() {
      var row = $("<div>");
      row.addClass("blogs");
      row.append("<p>" + newBlog.omdbMovieName + "</p>");
      row.append("<p>" + newBlog.userName + "</p>");
      row.append("<p>" + newBlog.moviePost + "</p>");
      row.append("<p>" + newBlog.movieRating + "</p>");
      row.append("<p>At " + moment(newBlog.created_at).format("h:mma on dddd") + "</p>");
      $("#blog-area").append(row);
    });
  // Empty each input box by replacing the value with an empty string
  $("#omdbMovieName").val("");
  $("#userName").val("");
  $("#moviePost").val("");
  $("#movieRating").val("");
});
// When the page loads, grab all of our blogs
$.get("/api/blogs", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("blogs");
      row.append("<p>" + data[i].omdbMovieName + "</p>");
      row.append("<p>" + data[i].userName + "</p>");
      row.append("<p>" + data[i].moviePost + "</p>");
      row.append("<p>" + data[i].movieRating + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
      $("#blog-area").append(row);
    }
  }
});
