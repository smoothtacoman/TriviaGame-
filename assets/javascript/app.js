$(document).ready(function () {

    var time = 45;
    var int = 0;


    var safari = {
        //questions and answers created below
        quiz: {
            question1: {
                question: "The heart of which of the following animals is located in its head?",
                answer1: "Zebra",
                answer2: "King Cobra",
                answer3: "Shrimp",
                answer4: "Lizzard"
            },
            question2: {
                question: "How old was the oldest gorilla?",
                answer1: "200 years old",
                answer2: "35 years old",
                answer3: "95years old",
                answer4: "60 years old",
            },
            question3: {
                question: "How many stomachs does a cow have?",
                answer1: "2",
                answer2: "4",
                answer3: "5",
                answer4: "1",
            },
            question4: {
                question: "Which one of these animals has a top speed of 75 mph?",
                answer1: "Cheetah",
                answer2: "Pig",
                answer3: "Bear",
                answer4: "Hyena",
            },
            question5: {
                question: "What animal is responisble for the most human deaths?",
                answer1: "Sharks",
                answer2: "Spiders",
                answer3: "Snakes",
                answer4: "Mosquitos",
            },
            question6: {
                question: "What country has the most know animal species?",
                answer1: "Russia",
                answer2: "Ecuador",
                answer3: "Brazil",
                answer4: "United States",
            },
            question7: {
                question: "Which of these is the slowest",
                answer1: "Panda",
                answer2: "Three toed sloth",
                answer3: "Tortoise",
                answer4: "Humming bird",
            },
        }
    };

    //hide divs at start

    $(".answers").hide();
    $("#time").hide();
    $("#question").hide();

    //make start button disapear and display first question
    $("#button-start").click(function () {
        var int = setInterval(function () {
            $("#time").html("Time Left: " + " " + time);
            time--;
            if (time === 0) {
                clearInterval(int);
                $("#time").html("Time is up!")
            }
        }, 1000);
        $("#button-start").hide();
        $(".answers").show();
        $("#time").show();
        $("#question").show();
    });
    //function to display questions
    //when question is clicked show if correct
    $(".answer").click(function (){

    })


    


    //make timer run for each question & reset after user completes question or until time runs out



    //choose what answers are right or wrong


})