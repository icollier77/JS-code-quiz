const highscoresList = document.querySelector("#highscores");
const clearScores = document.querySelector("#clear");


// pull scores from local storage and display on the Highscore
const newUserScore = JSON.parse(localStorage.getItem("user"));
const userInitials = newUserScore.initials;
const userScore = newUserScore.scoreValue;

// create html element to display the user score
const highscoreEl = document.createElement('li');
highscoreEl.innerHTML = `${userInitials} - ${userScore}.`
highscoresList.appendChild(highscoreEl);


// when user clicks on 'Clear Scores' button
clearScores.addEventListener('click', function(){
    localStorage.clear();
    highscoresList.removeChild(highscoreEl);
});