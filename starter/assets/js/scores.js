const highscoresList = document.querySelector("#highscores");
const clearScores = document.querySelector("#clear");

// pull scores from local storage and display on the Highscore
const newUserScore = JSON.parse(localStorage.getItem("user"));
console.log(newUserScore);
const userInitials = newUserScore.initials;
const userScore = newUserScore.scoreValue;

// create html element to display the user score
const highscoreEl = document.createElement('li');
highscoreEl.innerHTML = `${userInitials} - ${userScore}.`
highscoresList.appendChild(highscoreEl);


// set the 'Clear Scores' button to clear the scores
clearScores.addEventListener('click', function(){
    localStorage.clear();
});