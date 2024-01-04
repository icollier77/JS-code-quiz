const highscoresList = document.querySelector("#highscores");
const clearScores = document.querySelector("#clear");

// extract values from local storage into an array
const playersArray = JSON.parse(localStorage.getItem("userList"));

// sort the array in descending order to create leaderboard
const sortedArray = playersArray.sort((a,b) => parseFloat(b.scoreValue) - parseFloat(a.scoreValue));

// display player records on the page
let currentPlayerIndex = 0;
sortedArray.forEach(player => {
    const userInitials = sortedArray[currentPlayerIndex].initials;
    const userScore = sortedArray[currentPlayerIndex].scoreValue;
    const playerEl = document.createElement('li');
    playerEl.innerHTML = `${userInitials} - ${userScore}`
    highscoresList.appendChild(playerEl);
    currentPlayerIndex++;
});

// when user clicks on 'Clear Scores' button
clearScores.addEventListener('click', function(){
    localStorage.clear();
    while(highscoresList.firstChild) {
        highscoresList.removeChild(highscoresList.lastChild);
    }
});