const highscoresList = document.querySelector("#highscores");
const clearScores = document.querySelector("#clear");

// extract values from local storage and display in a list
const playersArray = JSON.parse(localStorage.getItem("userList"));
let currentPlayerIndex = 0;
playersArray.forEach(player => {
    const userInitials = playersArray[currentPlayerIndex].initials;
    const userScore = playersArray[currentPlayerIndex].scoreValue;
    const playerEl = document.createElement('li');
    playerEl.innerHTML = `${userInitials} - ${userScore}.`
    highscoresList.appendChild(playerEl);
    currentPlayerIndex++;
});

// when user clicks on 'Clear Scores' button
clearScores.addEventListener('click', function(){
    localStorage.clear();
    highscoresList.removeChild(playerEl);
});