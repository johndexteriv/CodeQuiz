var bodyEl = document.querySelector('body');
var homeEl = document.getElementById('home');
var containerEl = document.getElementsByClassName('container');
var initialEl = document.getElementsByClassName('initials');
var initialText = document.getElementById('initialText');
var lastScoreEl = document.getElementById('recentScore');
var submitScoreButton = document.getElementById('highScoreSubmit');
var highScoreULEl = document.getElementById('highScoreUL');


console.log('Body', bodyEl);
console.log('home', homeEl);
console.log('container', containerEl);
console.log('initials', initialEl);
console.log('where last score goes', lastScoreEl);
console.log('this is where you type initials', initialText);

var highScoreList = [
    
];



var userScoreLocal = localStorage.getItem('userScore');
console.log(userScoreLocal);

lastScoreEl.textContent = 'Great job, your score is: ' + localStorage.getItem('userScore');

function renderHighScores () {


    highScoreULEl.innerHTML = "";

    for (var i = 0; i < highScoreList.length; i++) {
    var currentScore = highScoreList[i].s;
    var currentInitial = highScoreList[i].i;
    
    var li = document.createElement('li');
    li.textContent = currentInitial + " " + currentScore;
    highScoreULEl.appendChild(li);
}

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

    renderHighScores();

    

});