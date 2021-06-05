'use strict';

/*   *QUERY SELECTOR*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "Correct Number"; 
document.querySelector('.number').textContent = "13";
document.querySelector('.score').textContent = "10";
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.quess').value);
 */

var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;
var highScore = 0;

var displayMessage = function (message){
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function(){

    const guessed = Number(document.querySelector('.guess').value);   

    //When there is no Input 
    if (!guessed){
        displayMessage("No number");
        document.querySelector('.score').value = score;

    //When the player wins 
    }else if (guessed == secretNumber){
        displayMessage("Yes, that's correct!");
        document.querySelector('body').style.backgroundColor = "Green"
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

    // DRY PRINCIPLE
    // When the score is not equal to secret number      
    }else if (guessed != secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = guessed > secretNumber ?  "Too high" : "Too low";            
            score--;
            document.querySelector('.score').textContent = score;
        }else{            
            displayMessage("You lost the game")
            document.querySelector('.score').textContent = 0;    
        }
    }    

    // *************NORMAL CODE WITHOUR 'DRY PRINCIPLE'************

    // else if (guessed > secretNumber){
    //     if (score > 1){
    //         document.querySelector('.message').textContent = "Too high!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = "You lost the game";
    //         document.querySelector('.score').textContent = 0;    
    //     }

    // // When the score is too low
    // }else if (guessed < secretNumber){
    //     if (score > 1){
    //         document.querySelector('.message').textContent = "Too low!";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = "You lost the game";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

// AFTER CLICKING THE RESET BUTTON

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = "Black";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.message').textContent = "start guessing...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});