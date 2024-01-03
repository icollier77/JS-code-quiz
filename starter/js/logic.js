// const variables for html elements
const timeEl = document.querySelector('#time');
const startScreenDiv = document.querySelector('#start-screen');
const startBtn = document.querySelector('#start');
const questionsDiv = document.querySelector('#questions');
const questionTitleEl = document.querySelector('#question-title');
const choicesDiv = document.querySelector('#choices');
const endScreenDiv = document.querySelector('#end-screen');
const finalScoreEl = document.querySelector('#final-score');
const initialsInput = document.querySelector('#initials');
const submitBtn = document.querySelector('#submit');
const feedbackEl = document.querySelector('#feedback');

// const variables for the sounds
const correctSound = new Audio('./starter/sfx/correct.wav');
const incorrectSound = new Audio('./starter/sfx/incorrect.wav');

// variables to be used in functions
let score = 0;
let currentQuestionIndex = 0;
let timeLeft = 75;

// -- on Start button click, start the timer, hide start screen div, show questions div --
startBtn.addEventListener('click', function() {
    countdown();
    showQuestions();
    askQuestion();
})

// ------- timer function ------------
function countdown() {
    const timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timeEl.textContent = 0;
            clearInterval(timeInterval);
            // when time runs out
            showEndScreen();
            addPlayer();
        };
    }, 1000);
}

// ----- hide start div, show questions div -------
function showQuestions() {
    startScreenDiv.classList.add("hide");
    questionsDiv.classList.toggle("hide");
}

// ---- ask quiz questions, show answer options ----
function askQuestion() {
    // display question
    questionTitleEl.textContent = questions[currentQuestionIndex].question;
    
    // create div for list of answers
    const answersList = document.createElement('ol');
    choicesDiv.appendChild(answersList);

    // create answers array
    const answers = questions[currentQuestionIndex].answers;
    choicesDiv.innerHTML= ""
    answers.forEach((answer, i) => {
        const optionBtn = document.createElement('button');  
        optionBtn.textContent = `${i + 1}. ${answer.text}`;
        optionBtn.setAttribute("class", "choices"); // apply styling
        optionBtn.setAttribute("data-correct", answer.correct); // extract info about correctness of the answer
        choicesDiv.append(optionBtn);
    });
    // when no more questions
    if (currentQuestionIndex === questions.length - 1) {
        showEndScreen();
        addPlayer();
    };
};

// ------------ Event delegation ------------
// when user clicks on answer option
// add text to feedback, play sound, change score or timeLeft
choicesDiv.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target && event.target.matches('button.choices')) {
        const chosenAnswer = event.target;
        if (chosenAnswer.dataset.correct === 'true') {
            feedbackEl.textContent = "Correct!";
            correctSound.play();
            score += 5;
        } else {
            feedbackEl.textContent = "Incorrect!";
            incorrectSound.play();
            timeLeft -= 5;
        }
        // show feedback for 1 sec
        feedbackEl.classList.toggle("hide");
        setTimeout(function() {
            feedbackEl.classList.toggle("hide");
        }, 1000);
        // ask the next question
        currentQuestionIndex++;
        askQuestion();  
    }
})

// ----- switch from questions div to the end screen div --------
function showEndScreen() {
    questionsDiv.classList.toggle("hide");
    endScreenDiv.classList.toggle("hide");
    finalScoreEl.textContent = score;
}

// -- extract array of players from local storage (or create array), add new player and score --
function addPlayer() {
    submitBtn.addEventListener('click', function(){
        let playerList = JSON.parse(localStorage.getItem('userList')) || [];
        const playerInitials = initialsInput.value.replace(/\s/g, '').toUpperCase(); // remove all spaces from input
        if (playerInitials.length === 0) {
            alert("Please enter your initials!");
        } else if (playerInitials.length > 2 || typeof playerInitials !== "string") {
            alert("Only 2 letters are allowed!");
        } else if (playerInitials.match(/\d+/g) || (playerInitials.match(/\p{P}+/g)) || (playerInitials.match(/[^\w\s]+/g))) {
            alert("Only letters, please!");
        } else {    
            const newPlayer = {initials: playerInitials, scoreValue: score};
            playerList.push(newPlayer);
            localStorage.setItem('userList', JSON.stringify(playerList));
            window.location.href = "highscores.html";
        };
    });
};