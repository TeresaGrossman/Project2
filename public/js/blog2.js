// //------FIRST ATTEMPT--------

// $(document).ready(function() {
// // Get references to page elements
//   var url = window.location.search;
//   var blogID;

//   //for posting to blog container
//   var blogContainer = $(".blog-container");

//   // If we have this section in our url, we pull out the post id from the url
//   // In localhost:8080/cms?post_id=1, postId is 1
//   if (url.indexOf("?post_id=") !== -1) {
//     postId = url.split("=")[1];
//     getBlogData(blogId);
//   }

//   // The API object contains methods for each kind of request we'll make
//   var omdbMovieName = $("#omdbMovieName");
//   var moviePost = $("#moviePost");
//   var userName = $("#userName");
//   var movieRating = $("#movieRating");

//   //Event listener for when form is submitted
//   $(cmsForm).on("submit", function handleFormSubmit(event) {
//     event.preventDefault();
//     // Wont submit the post if we are missing a body or a title
//     if (!omdbMovieName.val().trim() || !moviePost.val().trim()) {
//       return;
//     }

//     //For A newBlog object to database
//     var newBlog = {
//       omdbMovieName: omdbMovieName.val().trim(),
//       moviePost: moviePost.val().trim(),
//       userName: userName.val().trim(),
//       movieRating: movieRating.val()
//     };
//     console.log(newBlog);

//     // If we're updating a post run updatePost to update a post
//     // Otherwise run submitPost to create a whole new post
//     if (updating) {
//       newBlog.id = blogId;
//       updateBlog(newBlog);
//       }
//     else {
//       submitBlog(newBlog);
//     }
//   });

//     // Submits a new blog and brings user to blog page upon completion
//     function submitBlog(Blog) {
//         $.post("/api/blog/", Blog, function() {
//           window.location.href = "/blog";
//         });
//       }

//     //Updates Blog
//     function updateBlog(blog) {
//         $.ajax({
//           method: "PUT",
//           url: "/api/blog",
//           data: blog
//         })
//           .then(function() {
//             window.location.href = "/blog";
//           });
//         }
    
//     });

