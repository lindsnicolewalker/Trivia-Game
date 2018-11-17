// using jquery set a document ready function and make an array of trivia information
// set the array of objects full of questions, array answers choices, correct answers, and associated photos
$(document).ready(function () {
    var trivia = [
        {
            question: "What was the name of the first manned mission to land on the moon?", 
            choice: ["Apollo 10", "Apollo 11", "Apollo 12", "Apollo 13"],
            answer: 1,
            photo: "assets/images/apollo11.jpg"
         },
         {
             question: "What is the name for meteoroids that survive entry through the atmosphere and reach Earth’s surface?", 
            choice: ["Meteorites", "Meteors", "Shooting Stars", "Thor's Hammer"],
            answer: 0,
            photo: "assets/images/meteorite.jpg"
         }, 
         {
             question: "Able to be seen from outer space, what is Earth’s largest living structure?", 
            choice: ["Yucatán Peninsula", "Blue Whale", "The Great Barrior Reef", "Mesoamerican Barrier Reef System" ],
            answer: 2,
            photo: "assets/images/greatbarriorreef.jpg"
        }, 
        {
            question: "What is the closest star to our own sun?", 
            choice: ["Alfa Centauri A", "Alfa Centauri B", "Proxima Centauri", "Pluto" ],
            answer: 2,
            photo: "assets/images/proximacentauri.jpg"
        }, 
        {
            question: "Which U.S. President made the first telephone call to the moon??", 
            choice: ["Lyndon B. Johnson", "Gerald Ford", "Barack Obama", "Richard Nixon" ],
            answer: 3,
            photo: "assets/images/nixon.jpg"
        }, 
        {
            question: "Betelgeuse and Rigel are the two giant stars in which constellation?", 
            choice: ["Gemini", "Orion", "Taurus", "Leo" ],
            answer: 1,
            photo: "assets/images/orion.png"
        }, 
        {
            question: "In our solar system, which planet has the shortest day?", 
            choice: ["Saturn", "Jupiter", "Mars", "Uranus" ],
            answer: 1,
            photo: "assets/images/jupiter.gif"
        }, 
        {
            question: "Hale-Bopp is classified as which type of small Solar System body?",choice: ["Comet", "Planet", "Moon", "Avocado" ],
            answer: 0,
            photo: "assets/images/comet.webp"
        },
        {
            question: "What is the name for the disc-shaped region of icy bodies that extends from Neptune to about 55 astronomical units from the Sun?",
            choice: ["The Kuiper Belt", "Neptune's Ring", "Milky Way", "Event Horizon" ],
            answer: 0,
            photo: "assets/images/kuiperbelt.jpg"
        },
        {
            question: "In our solar system which two planets are known as ice giants?",choice: ["Uranus and Neptune", "Jupiter and Saturn", "Earth and Mars", "Uranus and Pluto" ],
            answer: 0,
            photo: "assets/images/icegiants.jpg"
        }];
    
    // set up all global variables including correct answer counter, incorrect answer counter, unanswered counter, timer, intervalId, user's guess empty string, a boolean variable, a questions counter set to the length of our array above, a choice var, an index var, an empty array var, and a temporary var
    
    var correctCounter = 0;
    var incorrectCounter = 0;
    var unansweredCounter = 0;
    var timer = 20;
    var intervalId;
    var playerChoice ="";
    var running = false;
    var questionsCounter = trivia.length;
    var choice;
    var index;
    var newArr = [];
    var temp = [];
    
    //set jquery to use method hide before the start button is pressed and after the conditions are met for end game
    $("#reset").hide();
    
    //click "challenge accepted" button to start game
    $("#start").on("click", function () {
            $("#start").hide();
            displayQuestion();
            runTimer();
            for(var i = 0; i < trivia.length; i++) {
        temp.push(trivia[i]);
    }
        })
    //run the timer after the first question is displayed, 20 seconds decrementing, use var running boolean to check when to start the timer
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    //decrementing timer display using function, tell jquery to put the timer display in the proper div
    function decrement() {
        $("#decrementingtimer").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        //stop decrementing timer if it reaches 0, then tell jquery to display time's up and the correct answer in proper div, and then finally hide pic
        if (timer === 0) {
            unansweredCounter++;
            stop();
            $("#answerdisplay").html("<p>Time is up! The correct answer is: " + choice.choice[choice.answer] + "</p>");
            hidepicture();
        }	
    }
    
    //timer stop function
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    // use js methods to randomly choose question in trivia array if not already selected
    //display question and display possible answers
    function displayQuestion() {
        //generate random index in trivia array, then choose said index in tivia array
        index = Math.floor(Math.random()*trivia.length);
        choice = trivia[index];
    
            //tell jquery to display question and then use a for loop to add a class and add to html the answer choice
            $("#questiondisplay").html("<h2>" + choice.question + "</h2>");
            for(var i = 0; i < choice.choice.length; i++) {
                var playerChoice = $("<div>");
                playerChoice.addClass("answerchoice");
                playerChoice.html(choice.choice[i]);
                //assign array position to playerChoice to compare with correct answer
                playerChoice.attr("data-choice", i);
                $("#answerdisplay").append(playerChoice);
    }
    
    //make on click function select answer
    $(".answerchoice").on("click", function () {
        //get array position from playerChoice
        playerChoice = parseInt($(this).attr("data-choice"));
    
        //if its a correct answer choice run stop function, add a point to the correct answer counter and display the correct answer and jquery adds a "right!" <p> tag to the proper html div , then runs hides picture before proceeding
        if (playerChoice === choice.answer) {
            stop();
            correctCounter++;
            playerChoice="";
            $("#answerdisplay").html("<p>Right!</p>");
            hidepicture();
        
        // if its an incorrect answer choice run stop function, add a point to the incorrect answer counter and display hte correct answer and jquery adds a "nice try!" <p> tag to the proper html div, then runs hide picture function before proceeding
        } else {
            stop();
            incorrectCounter++;
            playerChoice="";
            $("#answerdisplay").html("<p>Nice Try! The correct answer is: " + choice.choice[choice.answer] + "</p>");
            hidepicture();
        }
    })
    }
    
    //establish hide picture function  
    function hidepicture () {
        //jquery appends photo to proper html, using empty var new array only one photo appears
        $("#answerdisplay").append("<img src=" + choice.photo + ">");
        newArr.push(choice);
        trivia.splice(index, 1);
    
        // jquery hides a picture until 20 seconds is up
        var hidpic = setTimeout(function() {
            $("#answerdisplay").empty();
            timer= 20;
    
        // jquery runs the score screen if all questions answered
        if ((incorrectCounter + correctCounter + unansweredCounter) === questionsCounter) {
            $("#questiondisplay").empty();
            $("#questiondisplay").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answerdisplay").append("<h4> Correct: " + correctCounter + "</h4>" );
            $("#answerdisplay").append("<h4> Incorrect: " + incorrectCounter + "</h4>" );
            $("#answerblock").append("<h4> Unanswered: " + unansweredCounter + "</h4>" );
            $("#reset").show();
            correctCounter = 0;
            incorrectCounter = 0;
            unansweredCounter = 0;
    
        } else {
            runTimer();
            displayQuestion();
    
        }
        //picture displays for 3 seconds
        }, 3000);
    
    //end hide picture function
    }
    //jquery reset to prepare to start game over again 
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questiondisplay").empty();
        for(var i = 0; i < temp.length; i++) {
            trivia.push(temp[i]);
        }
        runTimer();
        displayQuestion();
    
    })
    
    })