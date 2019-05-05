$(document).ready(function(){
    $('.modal-trigger').leanModal();
    
    // Click submit...
    $("#submit").click(function(){
    
        // ...and check whether user left name & image blank...
        if ( $('#nameInput').val() == null || $('#imageInput').val() == null ) {
            alert("Please fill out all questions!");
            return false;
        };
    
        // ...Check whether user answered all survey questions.
        for (var i = 1; i <= 10; i++) {
            if ( $("input:radio[name=question"+i+"]:checked").val() == null ) {
                alert("Please fill out all questions!");
                return false;
            };
        };
    
        // Array to hold user answers.
        var scoreArray = [];
    
        // Looping through answers, push them to the array. 
        for (var i = 1; i <= 10; i++) {
            scoreArray.push( $("input:radio[name=question"+i+"]:checked").val() );
        }
    
        // Object to store user input.
        var person = {
            name: $('#nameInput').val(),
            image: $('#imageInput').val(),
            scores: scoreArray
        };
    
        // Var to hold current URL
        var currentURL = window.location.origin;
    
        // AJAX post request to server retrieves match info.
        $.post(currentURL + '/api/survey', person).done(function(data){
    
            // Modal pops up displaying match!
            $('#modal1').openModal();
    
            $('#modalArea').empty()
            var picture = '<img class="circle" src="'+data.image+'"">';
            $('#modalArea').append("<h5>" + data.name + " !</h5>")
            $('#modalArea').append(picture)
    
        });
    
    });
    });