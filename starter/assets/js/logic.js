// all const for html elements
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
let timeLeft = 75;

// after the 'Start Quiz' button is clicked, start the timer, hide the #Start-screen div and display the 1st question
startBtn.addEventListener('click', function() {
    countdown();
    showQuestions();
    askQuestions();
})

// timer function
function countdown() {
    // let timeLeft = 75;
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
// function to hide start div, show questions div
function showQuestions() {
    startScreenDiv.classList.add("hide");
    questionsDiv.classList.toggle("hide");
}
// function to cycle through questions
function askQuestions() {
    let currentQuestionIndex = 0;
    displayQuestion();

    function displayQuestion() {
        // display question
        questionTitleEl.textContent = questions[currentQuestionIndex].question;
        
        // create div for list of answers
        const answersList = document.createElement('ol');
        choicesDiv.appendChild(answersList);

        // create answers array
        const answers = questions[currentQuestionIndex].answers;

        // create lis with answer options, add to the list
        answers.forEach(answer => {
            const optionEl = document.createElement('button'); // create html element in DOM for answer option
            optionEl.classList.add("choices"); // add styling
            let answerText = document.createTextNode(answer.text); // add a node with answer's text
            let checkAnswer = answer.correct; // extract info about correctness of the answer
            optionEl.appendChild(answerText); // add text to the html element
            answersList.appendChild(optionEl); // add answer option to the list of answers
            // add event handler for click on answer
            optionEl.addEventListener('click', (event) => {
                event.stopPropagation(); // prevent event bubbling
                // remove previous list of answers for previous questions
                // answersList.parentNode.removeChild(answersList);
                choicesDiv.removeChild(answersList);
                console.log(answersList);
                // show feedback for 1 sec
                if(checkAnswer) {
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
                
                currentQuestionIndex++; // prepare to move to the next question
                // display the next question
                displayQuestion();
            });
        });
    };
};



// apply the question to #question-title and the answers to #choices

// when user answers correctly, show the Feedback div with 'Correct!' for a few seconds, add 20 to score
// when user answer incorrectly, show Feedback with 'Incorrect!' for a few seconds, subtract 10 sec from timer, subtract 10 from score

// after the feedback timer finishes, switch to the next question

// after a question is answered correctly, add 5 points; incorrectly - 0 points


// after all Qs are answered OR timer = 0, show 'End-screen' div to display final score and enter Initials, save Initials and score to local storage as JSON

// when user clicks 'Submit' function in the 'end-screen', open the highscores.html