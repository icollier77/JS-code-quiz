# Module 6 Challenge: Timed Quiz
Assignment 6 of the [Front-End Web Dev bootcamp][bootcamp-url] to create a timed quiz app.


****
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<!-- Webpage icon -->
  <a href="https://icollier77.github.io/password-generator/" target="_blank">
    <img src="./asset" alt="Logo" width="80" height="80">
  </a>

<h1 align="center">'Life in the UK

  <p align="center"> Those applying for British citizenship or settlement in the UK have to take "Life in the UK" test. This quiz helps applicants test their knowledge.</p>
    <!-- links to deployment -->
    <a href="https://icollier77.github.io/password-generator/" target="_blank">'Life in the UK' quiz</a>
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
        <li><a href="important-source">Important Source</a></li>
        <li><a href="different-logical-approach">Different Logical Approach</a></li>
        <li><a href="adding-randomization">Adding Randomization</a></li>
        <li><a href="modular-functions">Modular Functions</a></li>
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

<p>We were provided with the original image of the web app:

![inital screenshot][initial-img]
</p>


### Built With

We were provided with files already built in:
* [![HTML][html-badge]][html-url]
* [![CSS][css-badge]][css-url]

Basic data was provided (such as arrays of character types). I wrote the code in:
* [![JavaScript][js-badge]][js-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- The build process -->
## Development

I had 2 iterations of the code for the assignment. First, I created an app where all character types were joined in a mega-array and a password was randomly generated from it. When testing this solution, I realized that this approach did not guarantee that at least one character from each selected character set would be included in the generated password.

### Important source
So I changed my approach. This [video][password-video] was very helpful in directing my thinking. I also used parts of the code mentioned in that video in my solution.
* Namely, I used the code shown on 14:05 in my functions `addChar()`.
* I also referred to the code shown on 16:22 in my function `finishPassword()`.
* I used the method shown starting on 16:53 to connect my JavaScript to HTML to make the button interactive and to print out the generated password into the textbox (rather than displaying it on the console or via an alert).

### Different logical approach

However, as the assignment specifications were quite different from this video, my solution diverged significantly. I had to ask the user for input (i.e., which character sets to use) and therefore, had to 1) validate the input; 2) loop if no valid input is provided.

### Adding randomization

I also did not like that all character sets, when joined together in a mega-array, still had a predictable structure. So I used the [code snippet 446][shuffle-array-url] from StackOverflow to create a function that would **randomize the mega-array** before the application picks additional characters from it to reach the specified password length.

The next problem I encountered was that while the generated password had the specified length, and its second part was generated from a randomized array, the first part still followed a predictable structure. So, I created one more function using [code snippet 64][shuffle-string-url] to **re-shuffle the password string** 10 times to ensure that the password order could not be guessed.

### Modular functions

I broke each set of actions into a function, trying to balance modular approach and the DRY principle. Then I united 4 functions in a single function `createPassword()` and connected it to the html `button` element.

The modular approach allows for easier testing and debugging during development and also helps anyone else to see the logic flow.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Deployed project -->
## Deployed project

The project is now live.

### Deployed application

The deployed page looks like this:

![Deployed page][deployed-gif]


### Links to deployed project

You can find the password generator app and its corresponding code here:

- [ ] [Password Generator][deployed-url]
- [ ] [Project repo][repo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



#### Credit:
<details>
    <summary>Attribution</summary>

- Quiz icon from [Flaticon][quiz-icon-url] created by Vitaly Gorbachev.


<!-- MARKDOWN LINKS & IMAGES -->
[deployed-gif]: ./assets/password-generator-gif.gif
[deployed-url]: https://icollier77.github.io/password-generator/

[repo-url]: https://github.com/icollier77/life-in-uk-code-quiz

[initial-img]: ./assets/08-web-apis-challenge-demo.gif

[html-badge]: https://img.shields.io/badge/HTML-blue?logo=html5&logoColor=white
[css-badge]: https://img.shields.io/badge/CSS-orange?logo=CSS3
[js-badge]: https://img.shields.io/badge/JavaScript-purple?logo=Javascript&logoColor=white
[html-url]: https://www.w3schools.com/html/
[css-url]: https://www.w3schools.com/css/default.asp
[js-url]: https://www.w3schools.com/js/default.asp

[quiz-icon-url]: https://www.flaticon.com/free-icons/quiz

[bootcamp-url]: https://www.edx.org/boot-camps/coding/skills-bootcamp-in-front-end-web-development
[password-video]: https://www.youtube.com/watch?v=Xrsb9SiF3a8
[shuffle-array-url]: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
[shuffle-string-url]: https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript