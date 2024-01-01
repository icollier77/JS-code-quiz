# Module 6 Challenge: Timed Quiz
Assignment 6 of the [Front-End Web Dev bootcamp][bootcamp-url] to create a timed quiz app.


****
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<!-- Webpage icon -->
  <a href="https://icollier77.github.io/life-in-uk-code-quiz/" target="_blank">
    <img src="./assets/quiz.png" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">'Life in the UK</h1>

  <p align="center"> Those applying for British citizenship or settlement in the UK have to take "Life in the UK" test. This quiz helps applicants test their knowledge.</p>
    <!-- links to deployment -->
    <a href="https://icollier77.github.io/life-in-uk-code-quiz/" target="_blank">"Life in the UK" quiz</a>
    ·
    <a href="https://github.com/icollier77/life-in-uk-code-quiz" target="_blank">GitHub repo</a>
    ·
  <br>
  <br>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-goal">Project Goal</a></li>
        <li><a href="#project-specifications">Project Specifications</a></li>
        <li><a href="#sample-app">Sample App</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#development">Development</a></li>
      <ul>
        <li><a href="timer-code">Timer code</a></li>
        <li><a href="timer-condition">Timer condition</a></li>
        <li><a href="local-storage">Local storage</a></li>
        <li><a href="removing-multiple-children">Removing multiple children</a></li>
      </ul>
    <li><a href="#deployed-project">Deployed Project</a></li>
      <ul>
        <li><a href="#deployed-application">Deployed Application</a></li>
        <li><a href="#links-to-deployed-project">Links to Deployed Project</a></li>
      </ul>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

### Project Goal
The goal of this project is practice Web APIs: DOM manipulation and using local storage.

### Project Specifications

<p>The task for this challenges outlined the following requirements.</p>

<p><b>The features of the quiz app:</b></p>
<ol>
  <li>A start button that when clicked a timer starts and the first question appears.</li>
  <li>Questions contain buttons for each answer.</li>
  <li>When answer is clicked, the next question appears.</li>
  <li>If the answer clicked was incorrect then subtract time from the clock.</li>
  <li>The quiz should end when all questions are answered or the timer reaches 0.</li>
  <li>When the game ends, it should display their score and give the user the ability to save their initials and their score.</li>
</ol>

### Sample App

<p>We were provided with the original demo of the quiz web app:

![inital screenshot][initial-img]
</p>


### Built With

<p>We were provided with files already built in:</p>

[![HTML][html-badge]][html-url] [![CSS][css-badge]][css-url]

<p>I wrote the code in:</p>

[![JavaScript][js-badge]][js-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- The build process -->
## Development

This was the most challenging assignment up to now. Mastering the concepts of DOM, ways of manipulating DOM, creating new variables for it, and storing data in local storage as JSON were quite hard. I spent most of my time studying and trying to internalize the concepts.

When I started working on the assignment, I tried to use various loops to cycle through questions and answers. I quickly realized that regular loops do not work here as they run through all iterations without stopping for user input (which is required in this case: user has to select one of the answer choices).

Once I figured out how to solve this challenge, the rest of the work was quite fast. However, I did get stuck on 2 items:

* The condition for timer === 0 did not work (it worked well for timer < 0).
* To meet the demo gif design completely, I placed buttons within list items (\<li\>) but was not able to remove the styling for li:nth-child(odd).

For clarity, I placed all questions and their answers in the [Questions.js][questions-file] file, all logic in the [Logic.js][logic-file] file, and most code related to the scores in the [Scores.js][scores-file] file. There is some code related to scores still placed within the [Logic.js][logic-file] file - that is because the html elements that trigger this code are located in the [Index.html][index-file] file. If I were to move this code into the [Scores.js][scores-file] file to keep the code better organized, I would have to include a link to [Scores.js][scores-file] in the [Index.html][index-file] file but the task was **not to touch** the provided `html` and `css` files.

Finally (although this edge case was not specified in the requirements), the `css` styling alluded that we should be able to store multiple users in local storage and display a list of users and their scores on the [Highscores][scores-url] page Initially, I wrote the code for vanilla case (one user, always being overwritten in local storage by the latest player). But then I spent some time researching and re-writing the code to enable storing data for multiple players. I will expland more on this below.


### Data structure for questions and answers
I used this [video][quiz-video] to get an idea of how to structure the questions and answers data in the [Questions.js][questions-file] file.

### Timer code

I copied the code for the timer function from solved files on [GitLab (module 6, lesson 1, activity 10) (lines 9-33)][gitlab-timer-url].

### Timer condition

As I mentioned, I was stuck on the problem of timer === 0 for quite a while. I discussed it with [Ben Rumbold][ben-rumbold-url], a colleague in the [bootcamp][bootcamp-url], and he advised me to move this condition into the timer function directly. This finally solved the issue.

### Local storage

I wanted to store and retrieve multiple items from local storage, as this use case is closer to the real world.

This was quite a challenging issue. I researched online, but the best answer was provided to me by [ChatGPT][chatgpt-url]. Below are the instructions and the code I used in [Logic.js][logic-file] on lines 122, 125, 126:

![instructions][chatgpt-instructions]
![code][chatgpt-code]

### Removing multiple children

To be able to remove all user scores displayed on the [Highscores][scores-url] page, I used the code provided in snippet 2294, Option 2A provided on [StackOverflow][stackoverflow-url]. I used this code in [Scores.js][scores-file] on lines 19-21.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Deployed project -->
## Deployed project

The project is now live.

### Deployed application

The deployed page looks like this:
<!-- TODO: verify it works -->
![Deployed page][deployed-gif]


### Links to deployed project

You can find the password generator app and its corresponding code here:

- [ ] ["Life in the UK" quiz][deployed-url]
- [ ] [Project repo][repo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



#### Credit:
<details>
    <summary>Attribution</summary>

- Quiz icon from [Flaticon][flaticon-url] created by [Vitaly Gorbachev][quiz-icon-url].

<!-- MARKDOWN LINKS & IMAGES -->
<!-- TODO: get video, make gif, change link -->
[deployed-gif]: ./assets/password-generator-gif.gif

[deployed-url]: https://icollier77.github.io/life-in-uk-code-quiz/index.html

[repo-url]: https://github.com/icollier77/life-in-uk-code-quiz

[initial-img]: ./assets/08-web-apis-challenge-demo.gif

[html-badge]: https://img.shields.io/badge/HTML-blue?logo=html5&logoColor=white
[css-badge]: https://img.shields.io/badge/CSS-orange?logo=CSS3
[js-badge]: https://img.shields.io/badge/JavaScript-purple?logo=Javascript&logoColor=white
[html-url]: https://www.w3schools.com/html/
[css-url]: https://www.w3schools.com/css/default.asp
[js-url]: https://www.w3schools.com/js/default.asp

[quiz-icon-url]: https://www.flaticon.com/free-icon/quiz_4455825?term=quiz&page=1&position=83&origin=tag&related_id=4455825
[flaticon-url]: https://www.flaticon.com/

[bootcamp-url]: https://www.edx.org/boot-camps/coding/skills-bootcamp-in-front-end-web-development

[quiz-video]: https://www.youtube.com/watch?v=PBcqGxrr9g8

[gitlab-timer-url]: https://git.bootcampcontent.com/uk-edx-16-week/UK-VIRT-FE-PT-11-2023-U-LOLC/-/blob/main/06-web-apis-module/01-intro-api-lesson/activities/10-Stu-Timers-Intervals/solved/assets/js/script.js?ref_type=heads

[ben-rumbold-url]: https://github.com/Ben-Rumbold

[chatgpt-instructions]: ./assets/ChatGPT-instructions.png

[chatgpt-code]: ./assets/ChatGPT-code.png

[logic-file]: ./starter/assets/js/logic.js
[scores-file]: ./starter/assets/js/scores.js
[questions-file]: ./starter/assets/js/questions.js
[index-file]: ./index.html
[highscores-file]: ./highscores.html
[scores-url]: https://icollier77.github.io/life-in-uk-code-quiz/highscores.html
[stackoverflow-url]: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript

[chatgpt-url]: https://chat.openai.com/