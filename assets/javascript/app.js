$(document).ready(function () {
    //globals
    var time = 120;



//display questions in buttons

        //hide divs at start

    $(".answers").hide();
    $("#time").hide();
    $("#question").hide();
    $("#masterContainer").hide();
    $("#scoreboard").hide();
    

    //make start button disapear and display first question
    $("#button-start").click(function () {
        //timer starts here
        var int = setInterval(function () {
            $("#time").html("Time Left: " + " " + time);
            time--;
            if (time === 0) {
                clearInterval(int);
                $("#time").html("Time is up!")
            }
        }, 1000);
        //hide and show divs when button is clicked
        $("#button-start").hide();
        $(".answers").show();
        $("#time").show();
        $("#question").show();
        $("#masterContainer").show();

       

    });
 //make button to end game and display score
    $("#button-end").click(function () {
      
        $("#button-end").hide();
        $("#time").hide();
        $("#masterContainer").hide();
        $("#scoreboard").show();
        checkUserInput();
        
        
 });

    //when question is clicked show if correct
    function checkUserInput(){
        var correct = 0;
        var incorrect = 0;
        if(Q1 === correct) {
            correct++;
        }
        if(Q2 === correct) {
            correct++;
        }
        if(Q3 === correct) {
            correct++;
        }
        if(Q4 === correct) {
            correct++;
        }
        if(Q5 === correct) {
            correct++;
        }
        if(Q6 === correct) {
            correct++;
        }
        if(Q7 === correct) {
            correct++;
        }
    



        $("#scoreboard").html("Correct:" + " "
        + correct)

        alert("You finished the safari! Scroll up to see how you did.")
    
    
    };




    //choose what answers are right or wrong


});