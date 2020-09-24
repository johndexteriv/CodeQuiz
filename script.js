var bodyEl = document.querySelector('body');
var headerEl = document.querySelector('h1');
var textEl = document.getElementsByClassName('text');
var startButton = document.getElementById('start');
var timeRemainingEl = document.getElementById('timeremaining');


// var question1 = "Arrays in Javascript can be used to store";

//Can I set a variable to save startTime in local storage for final score?
function timerScore() {
    var startTime = 60;

    var timeInterval = setInterval(function(){
    timeRemainingEl.textContent = "Time Remaining = " + startTime;
    startTime--;

        if (startTime === 0) {
            window.location.href="highscores.html";
        }

    }, 1000);
}

function loadQuestion () {
    //Runs question object through -- should I have one object for each question?//

    var question1 = "Arrays in Javascript can be used to store";
    
    // var startButton = document.getElementById('start');
    // startButton.parentNode.removeChild(startButton);

    var answerA = document.createElement('button');
    answerA.textContent = "Answer A";
    bodyEl.appendChild(answerA);

    var answerB = document.createElement('button');
    answerB.textContent = "Answer B";
    bodyEl.appendChild(answerB);

    var answerC = document.createElement('button');
    answerC.textContent = "Answer C";
    bodyEl.appendChild(answerC);

    var answerD = document.createElement('button');
    answerD.textContent = "Answer D";
    bodyEl.appendChild(answerD);
    


}


startButton.addEventListener('click', function beginQuiz (event) {
    event.preventDefault();

    if (event.target.matches('#start')) {

        //Starts timer
        timerScore();
        //Clears start button
        var removeStartButton = document.getElementById('start');
        removeStartButton.parentNode.removeChild(removeStartButton);
        //Runs question function through
        loadQuestion();
    }


});