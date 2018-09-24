//animate logo
anime({
    targets: ".jumbotron",
    translateY: ["-250px", "0px"],
    duration: "2000"
});
//animate search bars
anime({
    targets: ".search-inputs",
    translateX: ["-500px", "0px"],
    duration: "2000"
});

//TMDb API config
var searchURL = "https://api.themoviedb.org/3/search/movie";
var searchNowURL = "https://api.themoviedb.org/3/movie/now_playing";
var movieURL = "https://api.themoviedb.org/3/movie/";
var apiKeyTMDb = "e48a4ae3c093a2322becafcc6dc5c8a0";

//OMDB API config
var ratingURL = "https://www.omdbapi.com/?i=";
var apiKeyOMDB = "7a2bf295";

//define global variables
var searchNowMovie;

var numOfResults = 0;
var movieList = [];
var movieDetails = {};
var movieRatings = [];
var videoSrc = "";

//execute search when search button is clicked (functions defined below)
$("#now-playing-btn").on("click", nowPlaying);

//execute search when search button is clicked (functions defined below)
$("#title-search-btn").on("click", searchTitle);

//when movie row is clicked update css and display (or clear) movie details
$(document).on("click", ".movie-row", function () {
    //if clicked row already selected then unselect
    if ($(this).hasClass("selected")) {
        //reset css for all rows
        $(".movie-row").css("opacity", "1"); 
        $(this).css("border-color", "#ddd");

        //animiate movie detail exit
        anime({
            targets: "#review-section",
            translateX: ["0px", "200px"],
            opacity: 0,
            duration: 500,
            easing: "linear",
            complete: function () {
                $("#review-section").empty();
            }
        });

        //remove background image
        $(".background").css("background-image", "url('../styles/images/white.jpg')");

        //remove 'selected' class from row
        $(".movie-row").removeClass("selected");

        //reset video source
        videoSrc = "";
    }
    //if clicked row is not currently selected then select now
    else {
        //fade non-selected rows
        $(".movie-row").css("opacity", "0.5");
        $(".movie-row").css("border-color", "#ddd");
        //bring selected row into focus
        $(this).css("opacity", "1");
        $(this).css("border-color", "#000");
        //assign 'selected' class to row
        $(".movie-row").removeClass("selected");
        $(this).addClass("selected");
        //reset video source
        videoSrc = "";        
        //get movie details
        getDetails($(this).attr("data-movie-id"));
    }

});

//display video when any movie details are clicked
$(document).on("click", "#vid-btn", function () {
    console.log(videoSrc);
    displayVideo();
});

//close modal when clicked anywhere outside of video
$(".vid-modal").on("click", function () {
    anime({
        targets: ".vid-modal",
        opacity: "0",
        duration: "500",
        easing: "linear",
        complete: function () {
            $(".vid-modal").css("visibility", "hidden");
            $("iframe").removeAttr("src");
        }
    });
});

//search for movies by title
function searchTitle() {
    //clear current results
    $("#summary-section").empty();
    $("#result-count").empty();
    $("#review-section").empty();
    //remove background image
    $(".background").css("background-image", "url('../styles/images/white.jpg')");
    //reset video source
    videoSrc = "";
    //configure search URL
    var searchTerm = $("#title-input").val().trim().replace(/ /g, "+");
    var queryURL = searchURL + "?api_key=" + apiKeyTMDb + "&query=" + searchTerm + "&include_adult=false";

    //generate API call and retrieve movie list
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        numOfResults = response.total_results;
        movieList = response.results;
        //display number of results
        var resultCount = $("#result-count");
        var countLabel = $("<span>").addClass("count-label").html("Results: ");
        resultCount.html(numOfResults);
        resultCount.prepend(countLabel);
        //render list of movies
        renderMovieList();
    });
}

//search for movies now playing
function nowPlaying() {
    //clear search input field
    $("#title-input").val("");
    //clear current results
    $("#summary-section").empty();
    $("#result-count").empty();
    $("#review-section").empty();
    //remove background image
    $(".background").css("background-image", "url('../styles/images/white.jpg')");
    //reset video source
    videoSrc = "";
    //configure search URL
    var queryURL = searchNowURL + "?api_key=" + apiKeyTMDb + "&include_adult=false&region=us";

    //generate API call and retrieve movies playing now list
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        numOfResults = response.total_results;
        movieList = response.results;
        //display number of results
        var resultCount = $("#result-count");
        var countLabel = $("<span>").addClass("count-label").html("Results: ");
        resultCount.html(numOfResults);
        resultCount.prepend(countLabel);
        //render list of movies now playing
        renderMovieList();
    });
}

//get movie details
function getDetails(movieID) {
    //configure API URL
    var queryURL = movieURL + movieID + "?api_key=" + apiKeyTMDb + "&append_to_response=reviews,external_ids,videos";

    //generate AJAX request
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        movieDetails = response;

        //display background image if it exists
        if (movieDetails.backdrop_path) {
            var imgURL = "https://image.tmdb.org/t/p/w1280" + movieDetails.backdrop_path;
            $(".background").css("background-image", "url('" + imgURL + "')");
        }
        //otherwise background to white
        else {
            $(".background").css("background-image", "url('../styles/images/white.jpg')");
        }
        //define video URL if exists
        if (movieDetails.videos.results[0]) {
            videoSrc = "https://www.youtube.com/embed/" + movieDetails.videos.results[0].key + "?autoplay=1";
        }
        
        //display details
        renderDetails();
    });
}


//render movie list
function renderMovieList() {
    for (let i = 0; i < movieList.length && i < 10; i++) {
        //assign movie attributes
        var imgBaseURL = "https://image.tmdb.org/t/p/w200";
        var movieID = movieList[i].id;
        var title = movieList[i].title;
        var releaseDate = movieList[i].release_date;
        var imgPath = movieList[i].poster_path;
        var vote = movieList[i].vote_average;
        var voteCount = movieList[i].vote_count;

        //define image URL if available otherwise load default image
        var imgURL = "";
        if (imgPath) { imgURL = imgBaseURL + imgPath; }
        else { imgURL = "../styles/images/clapperboard_poster.png"; }

        //create HTML elements
        var movieRow = $("<div>").addClass("movie-row").attr("id", "row-" + i).attr("data-movie-id", movieID);
        var movieImg = $("<img>").attr("src", imgURL);
        var movieInfo = $("<div>").addClass("movie-info");
        var movieTitle = $("<div>").addClass("movie-title").html(title);
        var movieDate = $("<div>").addClass("release-date").html(releaseDate);
        var movieVote = $("<div>").addClass("avg-vote").html(vote * 10 + "%  ");
        var dateLabel = $("<span>").addClass("label").html("Release Date: ");
        var voteLabel = $("<span>").addClass("label").html("Avg Vote: ");
        var countLabel = $("<span>").addClass("label").html("Vote Count: ");

        //add elements to page
        movieRow.append(movieImg);
        movieRow.append(movieInfo);
        movieInfo.append(movieTitle);
        movieInfo.append(movieDate);
        movieInfo.append(movieVote);
        movieDate.prepend(dateLabel);
        movieVote.prepend(voteLabel);
        movieVote.append(countLabel);
        movieVote.append(voteCount.toLocaleString());
        movieRow.css("opacity", 0);
        $("#summary-section").append(movieRow);
    }
    //fade in each row with a slight delay for each
    anime({
        targets: ".movie-row",
        opacity: 1,
        //easing: "linear",
        delay: function (el, i, l) {
            return i * 150;
        }
    });
}
//=========================Start Blog functions================
//render movie details
function renderDetails() {
    var blogArea = $("#blog-area");
    //if prior movie details displayed then animate old info exit and new info entrance
    if (blogArea.children().length) {
        //animate old review exit
        anime({
            targets: "#blog-area",
            translateX: ["0px", "100px"],
            opacity: 0,
            //once exist animation is complete perform the following actions
            complete: function (anim) {
                //clear prior details
                blogArea.empty();
                //add detail content after exit animation complete
                addDetailContent(blogArea);
                //get ratings
                // getRatings(movieDetails.external_ids.imdb_id);
            }
        });
    }
    //if no details currently displayed
    else {
        //add detail content after exit animation complete
        addDetailContent(blogArea);
        //get ratings
        // getRatings(movieDetails.external_ids.imdb_id);
    }
}
//
function addDetailContent(div) {
    //User Blog Title
    var reviewTitle = $("<h3>").addClass("review-title").html("Clapper Reviews");
    div.append(reviewTitle);

    //Add blog button
    var blogBtn = $("<button>").addClass("btn btn-secondary mx-auto mb-3").attr("id", "blog-btn").html("Add Review");
    div.append(blogBtn);
    //show form on review click
    // $(div).ready(function(){
    $("#blog-btn").click(function(){
        $("#cms").toggle();
        div.append(cms);
    });
    

    // $("#blog-btn").click(function() { $("#cms").show(); });
    // div.append(cms);

    //animate detail info entrance
    anime({
        targets: "#blog-area",
        translateY: ["100px", "0px"],
        duration: 1000,
        opacity: 1
    });
}
