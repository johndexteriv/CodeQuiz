var bodyEl = document.querySelector('body');
var containerEl = document.getElementsByClassName('container');
var headerEl = document.querySelector('h1');
var textEl = document.getElementsByClassName('text');
var timeRemainingEl = document.getElementById('timeremaining');
var buttonEl = document.querySelector('button');
var startButton = document.getElementById('start');
console.log('button', buttonEl);

//Can I set a variable to timerScore function in local storage for final score?
var startTime = 60;

function timerScore() {
    var timeInterval = setInterval(function () {
        timeRemainingEl.textContent = "Time Remaining = " + startTime;
        startTime--;

        if (startTime === 0) {
            window.location.href = "highscores.html";
        }

    }, 1000);
}

var count = 0;
var score = 0;

var questionsAndAnswers = [
    {
        question: "Commonly used date types DO NOT include:",
        answers: [
            { a: "strings", value: false },
            { a: "booleans", value: false },
            { a: "numbers", value: false },
            { a: "alerts", value: true },
        ]
    },

    {
        question: "The condition in an if/ else statement is enclosed with ___.",
        answers: [
            { a: "quotes", value: false },
            { a: "curly brackets", value: false },
            { a: "square brackets", value: false },
            { a: "parentheses", value: true },
        ]
    },

    {
        question: "Arrays in JavaScript can be used to store___.",
        answers: [
            { a: "numbers", value: false },
            { a: "All of the above", value: true },
            { a: "booleans", value: false },
            { a: "other arrays", value: false },
        ]
    },

    {
        question: "String values must be enclosed within ___ when being assigned values.",
        answers: [
            { a: "commas", value: false },
            { a: "curly brackets", value: false },
            { a: "quotes", value: true },
            { a: "parentheses", value: false },
        ]
    },

    {
        question: "A very useful tool when used during development and debugging for printing content to the debugger is:",
        answers: [
            { a: "JavaScript", value: false },
            { a: "for loopss", value: false },
            { a: "console.log", value: true },
            { a: "Terminal/Bash", value: false },
        ]
    },

    //After all questions are answered, show score (timeInterval) allow user to save intials.

];

function loadQuestion() {

    if (count > 4) {
        
        window.location.href = "highscores.html";

    } else {

        var newContainer = document.createElement('div');
        bodyEl.appendChild(newContainer);

        var newQuestionP = document.createElement('p');
        newQuestionP.textContent = JSON.stringify(questionsAndAnswers[count].question);
        newContainer.appendChild(newQuestionP);
        console.log('new question', newQuestionP);

        var answerA = document.createElement('button');
        answerA.classList.add("options");
        answerA.setAttribute("isCorrect", questionsAndAnswers[count].answers[0].value);
        answerA.textContent = JSON.stringify(questionsAndAnswers[count].answers[0].a);
        newContainer.appendChild(answerA);

        var answerB = document.createElement('button');
        answerB.classList.add("options");
        answerB.setAttribute("isCorrect", questionsAndAnswers[count].answers[1].value);
        answerB.textContent = JSON.stringify(questionsAndAnswers[count].answers[1].a);
        newContainer.appendChild(answerB);

        var answerC = document.createElement('button');
        answerC.classList.add("options");
        answerC.setAttribute("isCorrect", questionsAndAnswers[count].answers[2].value);
        answerC.textContent = JSON.stringify(questionsAndAnswers[count].answers[2].a);

        newContainer.appendChild(answerC);

        var answerD = document.createElement('button');
        answerD.classList.add("options");
        answerD.setAttribute("isCorrect", false);
        answerD.setAttribute("isCorrect", questionsAndAnswers[count].answers[3].value);
        answerD.textContent = JSON.stringify(questionsAndAnswers[count].answers[3].a);
        newContainer.appendChild(answerD);

        for (var i = 0; i < document.getElementsByClassName('options').length; i++) {
            document.getElementsByClassName('options')[i].addEventListener('click', function () {
                var currentOptionAttribute = this.getAttribute("isCorrect");
                if (currentOptionAttribute == "true") {
                    newContainer.innerHTML = "";
                    loadQuestion(count++)
                    score = score + 10 * startTime;
                    console.log('correct answer')
                    console.log('score', score);

                } else {
                    console.log('wrong answer');
                    startTime = startTime - 10;
                    alert('incorrect, points deducted!')
                    newContainer.innerHTML = "";
                    loadQuestion(count++)
                }
             

            });
        }

    }





};

//After all questions are answered, show score (timeInterval) allow user to save intials, which appears on HighScore page.
//How would I make the time interval global so I can -- when wrong answer is



buttonEl.addEventListener('click', function beginQuiz(event) {
    event.preventDefault();

    if (event.target.matches('#start')) {
        //Starts timer
        timerScore();
        //Clears container
        var clearContainer = document.querySelector('.container');
        clearContainer.innerHTML = "";
        // clearContainer.parentNode.removeChild(clearContainer);
        //Runs question function through
        loadQuestion(count);
        //How do we the question and buttons the answers land on random?
    }


});