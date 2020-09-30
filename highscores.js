var bodyEl = document.querySelector('body');
var homeEl = document.getElementById('home');
var containerEl = document.getElementsByClassName('container');
var initialEl = document.getElementsByClassName('initials');
var initialText = document.getElementById('initialText');
var lastScoreEl = document.getElementById('recentScore');
var submitScoreButton = document.getElementById('highScoreSubmit');
var highScoreULEl = document.getElementById('highScoreUL');
var listOfScoresEl = document.getElementById('listOfScores');



var highScoreList = [
    
];

showHighScores ();

function showHighScores () {

    var storedScores = JSON.parse (localStorage.getItem('highScoreList'));
    console.log(storedScores);

    if (storedScores !== null){
        highScoreList = storedScores;
    }
    renderHighScores ();
}


lastScoreEl.textContent = 'Great job, your score is: ' + localStorage.getItem('userScore');

function renderHighScores () {

    highScoreULEl.innerHTML = "";
    listOfScoresEl = highScoreList.length;

    for (var i = 0; i < highScoreList.length; i++) { 
    var currentScore = highScoreList[i].s;
    var currentInitial = highScoreList[i].i;

    var li = document.createElement('li');
    li.textContent = currentInitial + " " + currentScore;
    li.setAttribute('data-index', i);
    
    highScoreULEl.appendChild(li);
}

};

function storeHighScores () {
localStorage.setItem('highScoreList', JSON.stringify(highScoreList));
};

submitScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    var userInitials = initialText.value.trim();

    if (userInitials === ""){
        return;
    } 

    highScoreList.push({i:userInitials, s:localStorage.getItem('userScore')});

    initialText.value = "";
    lastScoreEl.value = "";

    storeHighScores();
    renderHighScores();

    

});