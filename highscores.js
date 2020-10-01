var bodyEl = document.querySelector('body');
var homeEl = document.getElementById('home');
var containerEl = document.getElementsByClassName('container');
var initialEl = document.getElementsByClassName('initials');
var initialText = document.getElementById('initialText');
var lastScoreEl = document.getElementById('recentScore');
var submitScoreButton = document.getElementById('highScoreSubmit');
var highScoreULEl = document.getElementById('highScoreUL');
var listOfScoresEl = document.getElementById('listOfScores');
var clearButtonEl = document.getElementById('clear');

// Variable to push highScores into
var highScoreList = [
    
];
// Call showHighScores function
showHighScores ();

function showHighScores () {
    //storedScores variable retrieves the highScoreList from local storage and parses it
    var storedScores = JSON.parse (localStorage.getItem('highScoreList'));
    storedScores.sort(function(a,b){return b-a});
    console.log('these are the scores', storedScores);
    //
    if (storedScores !== null){
        highScoreList = storedScores;
    }
    // Call renderHighScores
    renderHighScores ();
    
}

// Retrieves most recent score from local storage and displays it in lastScoreEl
lastScoreEl.textContent = 'Great job, your score is: ' + localStorage.getItem('userScore');

function renderHighScores () {
    //Clears highScoreULEL and sets the listOfScoresEl to show length of highScoreList
    highScoreULEl.innerHTML = "";
    listOfScoresEl = highScoreList.length;
    //Loop that runs length of highScoreList, grabbing initials and scores of [i]
    for (var i = 0; i < highScoreList.length; i++) { 
    var currentScore = highScoreList[i].s;
    var currentInitial = highScoreList[i].i;
    //Creates a li and appends the currentInitial and currentScore to highScoreULEl
    var li = document.createElement('li');
    li.textContent = currentInitial + " " + currentScore;
    li.setAttribute('data-index', i);
    
    highScoreULEl.appendChild(li);
}
};
// Stores highScoreList as a string in local storage.
function storeHighScores () {
localStorage.setItem('highScoreList', JSON.stringify(highScoreList));
};
// Click event on submit button 
submitScoreButton.addEventListener("click", function(event) {
    event.preventDefault();
    var userInitials = initialText.value.trim();
    // If no userInitials - return
    if (userInitials === ""){
        return;
    } 
    // Pushes userInitials and userScore to highScoreList in [{,}] format
    highScoreList.push({i:userInitials, s:localStorage.getItem('userScore')});
    //Clears initialText and lastScoreEl
    initialText.value = "";
    lastScoreEl.value = "";
    // Calls to storeHighScores and then renderHighScores
    storeHighScores();
    renderHighScores();

    

});
//Click event on clear button - If target matches clear, splice the lenght of highScoreList
clearButtonEl.addEventListener("click", function(event){
    if (event.target.matches('#clear')){
    highScoreList.splice(0, highScoreList.length);
    // Call storeHighScores and renderHighScores
    storeHighScores();
    renderHighScores();


    };
});
