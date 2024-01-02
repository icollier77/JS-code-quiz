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
const correctSound = new Audio('/starter/assets/sfx/correct.wav');
const incorrectSound = new Audio('/starter/assets/sfx/incorrect.wav');

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

    // create lis with answer options, add to the list
    answers.forEach(answer => {
        const optionLi = document.createElement('li'); // create html element in DOM for answer option
        // TODO: remove background color on the Lis
        // optionLi.style.removeProperty('backgroundColor'); // <- NOT WORKING!!!
        // const allLis = document.querySelectorAll('li:nth-child(odd)');
        // allLis.style.removeProperty('backgroundColor'); // <- NOT WORKING!!!!

        let answerText = document.createTextNode(answer.text); // add a node with answer's text
        let correctAnswer = answer.correct; // extract info about correctness of the answer
        optionLi.appendChild(answerText); // add text to the html element
        const optionBtn = document.createElement('button');       

        optionBtn.classList.add("choices"); // add styling
        optionBtn.appendChild(optionLi);
        answersList.appendChild(optionBtn); // add answer option to the list of answers
        
        // TODO: delete if not needed
        // ---------- previous version ------------
        // const optionEl = document.createElement('button'); // create html element in DOM for answer option
        // optionEl.classList.add("choices"); // add styling
        // let answerText = document.createTextNode(answer.text); // add a node with answer's text
        // let correctAnswer = answer.correct; // extract info about correctness of the answer
        // optionEl.appendChild(answerText); // add text to the html element
        // answersList.appendChild(optionEl); // add answer option to the list of answers
        
        // when user clicks on answer option
        optionBtn.addEventListener('click', (event) => {
            choicesDiv.removeChild(answersList); // remove list of answers for previous question
            // add text to feedback, change score or timeLeft
            if(correctAnswer) {
                feedbackEl.textContent = "Correct!";
                // TODO: figure out sounds
                correctSound.play();
                score += 5;
            } else {
                feedbackEl.textContent = "Incorrect!";
                // TODO: figure out sounds
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
        });
    });
    // when no more questions
    if (currentQuestionIndex === questions.length - 1) {
        showEndScreen();
        addPlayer();
    };
};

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