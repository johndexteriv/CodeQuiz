document.addEventListener("DOMContentLoaded", function() {
    
  

var bodyEl = document.querySelector('body');
var containerEl = document.getElementsByClassName('container');
var headerEl = document.querySelector('h1');
var textEl = document.getElementsByClassName('text');
var timeRemainingEl = document.getElementById('timeremaining');
var buttonEl = document.querySelector('button');
var startButton = document.getElementById('start');
console.log('button', buttonEl);

//Can I set a variable to timerScore function in local storage for final score?

//Assigned a variable to startTime - Begins timer at 60 seconds when called upon in the timerScore function.
var startTime = 60;

function timerScore() {
    setInterval(function () {
        //Assigns the seconds remaining to be displayed as textContent in the timeRemainingEl 
        timeRemainingEl.textContent = "Time Remaining = " + startTime;
        startTime--;
        // If startTime reaches 0, the user is redirected to high scores page
        if (startTime === 0) {
            window.location.href = "highscores.html";
        }

    }, 1000);
}
//Assign count variable starting at zero. Increases when currentOptionAttribute is equal to true.
var count = 0;
//Assign score variable starting at zero. Increases by 10 * startTime remaining when currentOptionAttribute is equal to true.
var score = 0;

// Array of five questions and answers
var questionsAndAnswers = [
    {
        question: "Commonly used date types DO NOT include:",
        //Answer options with true values assigned to the correct answer and false values assigned to incorrect answers.
        answers: [
            { a: "strings", value: false },
            { a: "booleans", value: false },
            { a: "numbers", value: false },
            { a: "alerts", value: true },
        ]
    },

    {
        question: "The condition in an if/ else statement is enclosed with ___.",
        //Answer options with true values assigned to the correct answer and false values assigned to incorrect answers.
        answers: [
            { a: "quotes", value: false },
            { a: "curly brackets", value: false },
            { a: "square brackets", value: false },
            { a: "parentheses", value: true },
        ]
    },

    {
        question: "Arrays in JavaScript can be used to store___.",
        //Answer options with true values assigned to the correct answer and false values assigned to incorrect answers.
        answers: [
            { a: "numbers", value: false },
            { a: "All of the above", value: true },
            { a: "booleans", value: false },
            { a: "other arrays", value: false },
        ]
    },

    {
        question: "String values must be enclosed within ___ when being assigned values.",
        //Answer options with true values assigned to the correct answer and false values assigned to incorrect answers.
        answers: [
            { a: "commas", value: false },
            { a: "curly brackets", value: false },
            { a: "quotes", value: true },
            { a: "parentheses", value: false },
        ]
    },

    {
        question: "A very useful tool when used during development and debugging for printing content to the debugger is:",
        //Answer options with true values assigned to the correct answer and false values assigned to incorrect answers.
        answers: [
            { a: "JavaScript", value: false },
            { a: "for loopss", value: false },
            { a: "console.log", value: true },
            { a: "Terminal/Bash", value: false },
        ]
    },
];

//Function that loads questions once start button is clicked
function loadQuestion() {
// If question count variable exceeds 4, redirect user to high scores page.
    if (count > 4) {
        window.location.href = "highscores.html";
        console.log('the high scores page loads too fast to even register a console');
        //Assign score to be saved in local storage and called up on high scores page!!
        // Else load next question based on count variable        
    } else {
        // Create new container div and apped to body element
        var newContainer = document.createElement('div');
        bodyEl.appendChild(newContainer);
        // Create new question paragraph div
        var newQuestionP = document.createElement('p');
        // New question paragraph divs textContent is equal to questionsaAndAnswer[count].question
        newQuestionP.textContent = JSON.stringify(questionsAndAnswers[count].question);
        // Append newQuestion paragraph to newContainer
        newContainer.appendChild(newQuestionP);

        // Create new answerA button
        var answerA = document.createElement('button');
        // Add to classList of "options" to be called upon in .onclick for loop
        answerA.classList.add("options");
        // Set attribute of isCorrect associated with the value of answer in questionsAndAnswers array
        answerA.setAttribute("isCorrect", questionsAndAnswers[count].answers[0].value);
        // Set answerA button's text content to questionsAndAnswers[count].answers[0].a 
        answerA.textContent = JSON.stringify(questionsAndAnswers[count].answers[0].a);
        // Append answerA to newContainer div
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
        // For loop that loops through "options" class length
        for (var i = 0; i < document.getElementsByClassName('options').length; i++) {
            // Assigns click function to "options" class [i]
            document.getElementsByClassName('options')[i].addEventListener('click', function () {
                // Sets variable of currentOptionAttribute to value associate with isCorrect
                var currentOptionAttribute = this.getAttribute("isCorrect");
                // If currentOptionAttribute is true - clear newContainer html, load next question based on count++ increase
                // Assign score of score + 10 * startTime
                if (currentOptionAttribute == "true") {
                    newContainer.innerHTML = "";
                    loadQuestion(count++)
                    score = score + 10 * startTime;
                    console.log('correct answer')
                    console.log('score', score);
                // Else deduct 10 from startTime and alert user of their wrong answer
                } else {
                    console.log('wrong answer');
                    startTime = startTime - 10;
                    alert('incorrect, please try again! \\n  points deducted!')
                
                }
             

            });
        }

    }





};

// click EventListener assigned to beginQuiz function
buttonEl.addEventListener('click', function beginQuiz(event) {
    event.preventDefault();
    // If target matches #start assigned to start button
    if (event.target.matches('#start')) {
        //Starts timer
        timerScore();
        //Clears container
        var clearContainer = document.querySelector('.container');
        clearContainer.innerHTML = "";
        //Runs question function through
        loadQuestion(count);
    }


});

});