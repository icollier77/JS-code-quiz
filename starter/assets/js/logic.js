// const variables for html elements
const timeEl = document.querySelector('#time');
const startScreenDiv = document.querySelector('#start-screen');
const startBtn = document.querySelector('#start');
const questionsDiv = document.querySelector('#questions');
const questionTitleEl = document.querySelector('#question-title');
const choicesDiv = document.querySelector('#choices');
const endScreenDiv = document.querySelector('#end-screen');
const finalScoreEl = document.querySelector('#final-score');
const initialsEl = document.querySelector('#initials');
const submitBtn = document.querySelector('#submit');
const feedbackEl = document.querySelector('#feedback');

let score = 0;
let currentQuestionIndex = 0;
let timeLeft = 75;

// on Start button click, start the timer, hide start screen div, show questions div
startBtn.addEventListener('click', function() {
    countdown();
    showQuestions();
    askQuestion();
})

// timer function
function countdown() {
    const timeInterval = setInterval(function() {
        if (timeLeft >= 0) {
            timeEl.textContent = timeLeft;
            timeLeft--;
        } else {
            timeEl.textContent = 0;
            clearInterval(timeInterval);
        };
    }, 1000);
}

// hide start div, show questions div
function showQuestions() {
    startScreenDiv.classList.add("hide");
    questionsDiv.classList.toggle("hide");
}

// ask quiz questions, show answer options
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

        optionLi.style.removeProperty('backgroundColor'); // <- NOT WORKING!!!!
  
        let answerText = document.createTextNode(answer.text); // add a node with answer's text
        let correctAnswer = answer.correct; // extract info about correctness of the answer
        optionLi.appendChild(answerText); // add text to the html element
        const optionBtn = document.createElement('button');
        optionBtn.classList.add("choices"); // add styling
        optionBtn.appendChild(optionLi);
        answersList.appendChild(optionBtn); // add answer option to the list of answers

        // const optionEl = document.createElement('button'); // create html element in DOM for answer option
        // optionEl.classList.add("choices"); // add styling
        // let answerText = document.createTextNode(answer.text); // add a node with answer's text
        // let correctAnswer = answer.correct; // extract info about correctness of the answer
        // optionEl.appendChild(answerText); // add text to the html element
        // answersList.appendChild(optionEl); // add answer option to the list of answers
        // when user clicks on answer option
        optionBtn.addEventListener('click', (event) => {
            // remove list of answers for previous questions
            choicesDiv.removeChild(answersList);
            // show feedback for 1 sec
            if(correctAnswer) {
                feedbackEl.textContent = "Correct!";
                score += 5;
            } else {
                feedbackEl.textContent = "Incorrect!";
                timeLeft -= 5;
            }
            feedbackEl.classList.toggle("hide");
            setTimeout(function() {
                feedbackEl.classList.toggle("hide");
            }, 1000);
            // ask the next question
            currentQuestionIndex++;
            askQuestion();                
        });
    });
    // when time runs out OR no more questions
    if (timeLeft <= 0 || currentQuestionIndex === questions.length - 1) {
        showEndScreen();
        addPlayer();
    };
};

// switch from questions div to the end screen div
function showEndScreen() {
    questionsDiv.classList.toggle("hide");
    endScreenDiv.classList.toggle("hide");
    finalScoreEl.textContent = score;
}

// extract array of players from local storage (or create array), add new player and score
function addPlayer() {
    submitBtn.addEventListener('click', function(e){
        let playerList = JSON.parse(localStorage.getItem('userList')) || [];
        const playerInitials = initialsEl.value;
        const newPlayer = {initials: playerInitials, scoreValue: score};
        playerList.push(newPlayer);
        localStorage.setItem('userList', JSON.stringify(playerList));
        window.location.href = "highscores.html";
    });
}