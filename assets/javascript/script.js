// using jquery set a document ready function and make an array of trivia information
// set the array of objects full of questions, array answers choices, correct answers, and associated photos

    // set up all global variables including correct answer counter, incorrect answer counter, unanswered counter, timer, intervalId, user's guess empty string, a boolean variable, a questions counter set to the length of our array above, a choice var, an index var, an empty array var, and a temporary var

    //set jquery to use method hide before the start button is pressed and after the conditions are met for end game
   
    //click "challenge accepted" button to start game
   
    //run the timer after the first question is displayed, 20 seconds decrementing, use var running boolean to check when to start the timer
    
    //decrementing timer display using function, tell jquery to put the timer display in the proper div
    
        //stop decrementing timer if it reaches 0, then tell jquery to display time's up and the correct answer in proper div, and then finally hide pic
            
    //timer stop function
   
    // use js methods to randomly choose question in trivia array if not already selected
    //display question and display possible answers
  
        //generate random index in trivia array, then choose said index in tivia array
   
            //tell jquery to display question and then use a for loop to add a class and add to html the answer choice
           
    //make on click function select answer

    //get array position from playerChoice
    
        //if its a correct answer choice run stop function, add a point to the correct answer counter and display the correct answer and jquery adds a "right!" <p> tag to the proper html div , then runs hides picture before proceeding
        
        // if its an incorrect answer choice run stop function, add a point to the incorrect answer counter and display hte correct answer and jquery adds a "nice try!" <p> tag to the proper html div, then runs hide picture function before proceeding
       
    //establish hide picture function  

        //jquery appends photo to proper html, using empty var new array only one photo appears
           
        // jquery hides a picture until 20 seconds is up
       
        // jquery runs the score screen if all questions answered
 
    //end hide picture function
    
    //jquery reset to prepare to start game over again 
   