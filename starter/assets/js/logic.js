// all const for html elements
const timeEl = document.querySelector('#time');
const startScreenDiv = document.querySelector('#start-screen');
const startBtn = document.querySelector('#start');
const questionsDiv = document.querySelector('#questions');
const questionTitleEl = document.querySelector('#question-title');
const choicesEl = document.querySelector('#choices');
const endScreenDiv = document.querySelector('#end-screen');
const finalScoreEl = document.querySelector('#final-score');
const initialsEl = document.querySelector('#initials');
const submitBtn = document.querySelector('#submit');
const feedbackEl = document.querySelector('#feedback');

let score = 0;
let currentQuestionIndex = 0;

// after the 'Start Quiz' button is clicked, start the timer, hide the #Start-screen div and display the 1st question
startBtn.addEventListener('click', function() {
    countdown();
    showQuestions();
    askQuestions();
})

// timer function
function countdown() {
    let timeLeft = 75;
    const timeInterval = setInterval(function () {
    if (timeLeft >= 0) {
        timeEl.textContent = timeLeft;
        timeLeft--;
    } else {
        timeEl.textContent = 0;
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        // displayMessage();
    }
    }, 1000);
}

// hide start div, show 1st question
function showQuestions(event) {
    startScreenDiv.classList.add("hide");
    questionsDiv.classList.toggle("hide");
}
    
// cycle through questions
function askQuestions() {
    let currentQuestion = questions[currentQuestionIndex];

}

function askQuestions() {
    for (let i = 0; i < questions.length; i++) {
        questionTitleEl.textContent = questions[i].question;
        const answersList = document.createElement('ol');
        questionTitleEl.appendChild(answersList);
        let answers = questions[i].answers;
        for (let j = 0; j < answers.length; j++) {
            const answerOption = document.createElement('li');
            answerOption.textContent = answers[j].text;
            answersList.append(answerOption);
        }
    }
}



// when timer = 0, switch to the 

// apply the question to #question-title and the answers to #choices



// when user answers correctly, show the Feedback div with 'Correct!' for a few seconds, add 20 to score
// when user answer incorrectly, show Feedback with 'Incorrect!' for a few seconds, subtract 10 sec from timer, subtract 10 from score



// after the feedback timer finishes, switch to the next question




// after a question is answered correctly, add 5 points; incorrectly - 0 points


// after all Qs are answered OR timer = 0, show 'End-screen' div to display final score and enter Initials, save Initials and score to local storage as JSON

// when user clicks 'Submit' function in the 'end-screen', open the highscores.html
