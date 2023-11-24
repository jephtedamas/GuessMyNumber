'use strict';

let checkBtn = document.querySelector('.check');
let resetBtn = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let elScore = document.querySelector('.score');
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

checkBtn.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        displayMessage('Enter number');
    }  

    //when player wins
    else if (guess === secretNumber) {
        displayMessage('Correct number');
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    //when guess is wrong 
    else if (guess !== secretNumber) {
        
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
            score--;
            elScore.textContent = score;
        }
        else { 
            displayMessage('You lost the game');
        }
    }
});

//when again button is clicked
resetBtn.addEventListener('click', function() {
    displayMessage('Start guessing...');
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    elScore.textContent = score;
    document.querySelector('.guess').value = '';
    document.body.style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    
});