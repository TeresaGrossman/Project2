console.log("hello");

$("#submitform").on("click", function(){
    var email = $("#exampleInputEmail1").val().trim();
    var password = $("#exampleInputPassword1").val().trim();

    var login = {
        email,
        password
    };

    console.log("email: " + email);
    console.log("password: " + password);


    // what the post call might look like. routes may differ and logged in view might be something else
    // $.post("/api/login", loginObj, function(data){
    //     console.log(data)

    //     if(data.loggedIn){
    //         window.location("/loggedin");
    //     }else {
    //         window.location("/404page");
    //     }
    // });
})