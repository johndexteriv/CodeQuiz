var bodyEl = document.querySelector('body');
var containerEl = document.getElementsByClassName('container');
var headerEl = document.querySelector('h1');
var textEl = document.getElementsByClassName('text');
var startButton = document.getElementById('start');
var timeRemainingEl = document.getElementById('timeremaining');


var questionsAndAnswers = {
    
    question1: {
    question: "Commonly used date types DO NOT include:",
    correctAnswer:"alerts",
    wrongAnswers: ["strings", "booleans", "numbers"],
    },

    question2: {
    question: "The condition in an if/ else statement is enclosed with ___.",
    correctAnswer:"parentheses",
    wrongAnswers: ["quotes", "curly brackets", "square brackets"],
    },

    question3: {
    question: "Arrays in JavaScript can be used to store___.",
    correctAnswer: "All of the above",
    wrongAnswers: ["numbers", "other arrays", "booleans"],
    },

    question4: {
    question: "String values must be enclosed within ___ when being assigned values.",
    correctAnswer:"quotes",
    wrongAnswers: ["commas", "curly brackets", "parentheses"],
    },


    question5: {
    question: "A very useful tool when used during development and debugging for printing content to the debugger is:",
    correctAnswer:"console.log",
    wrongAnswers: ["JavaScript", "Terminal/Bash", "for loops"],
    },
    //After all questions are answered, show score (timeInterval) allow user to save intials.

};


//Can I set a variable to timerScore function in local storage for final score?
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

    var currentTime = timeRemainingEl.textContent;

    var clearContainer = document.querySelector('.container');
    clearContainer.parentNode.removeChild(clearContainer);

    var newContainer = document.createElement('div');
    bodyEl.appendChild(newContainer);

    var newQuestionP = document.createElement('p');
    newQuestionP.textContent = JSON.stringify (questionsAndAnswers.question1.question);
    newContainer.appendChild(newQuestionP);

    var answerA = document.createElement('button');
    answerA.textContent = JSON.stringify (questionsAndAnswers.question1.correctAnswer);
    newContainer.appendChild(answerA);

    var answerB = document.createElement('button');
    answerB.textContent = JSON.stringify (questionsAndAnswers.question1.wrongAnswers[0]);
    newContainer.appendChild(answerB);

    var answerC = document.createElement('button');
    answerC.textContent = JSON.stringify (questionsAndAnswers.question1.wrongAnswers[1]);
    newContainer.appendChild(answerC);

    var answerD = document.createElement('button');
    answerD.textContent = JSON.stringify (questionsAndAnswers.question1.wrongAnswers[2]);
    newContainer.appendChild(answerD);
    
    addEventListener('click', function wrongAnswer(event){
        if(event.target !== answerA) {
            console.log('wrong answer');
        } else {
            console.log('next question');
        }
    })
    
    //After all questions are answered, show score (timeInterval) allow user to save intials, which appears on HighScore page.
    //How would I make the time interval global so I can -- when wrong answer is

}

//  var highScores = [];


startButton.addEventListener('click', function beginQuiz (event) {
    event.preventDefault();

    if (event.target.matches('#start')) {

        //Starts timer
        timerScore();
        //Runs question function through
        loadQuestion();
        //How do we the question and buttons the answers land on random?
    }


});