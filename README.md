# Challenge 04 


## Coding Quiz

---

### Contents 

---

1. Objectives
2. About
3. Screenshots
4. Links
5. Assignment details & grading rubric (*ignore me*)

<br>
<br>

### Objectives ###

---

<br>

1. WHEN the user opens the planner the current day is displayed at the top of the calendar
2. WHEN the user scroll down they are presented with timeblocks for standard business hours
3. WHEN viewed, each timeblock is color coded to indicate whether it is in the past, present, or future
4. WHEN a timeblock is clicked, the user can enter an event.
5. WHEN the save button for that timeblock is clicked, the text for that event is saved in local storage
6. WHEN the page is refreshed the saved events persist

<br>
<br>

### About ###

---

<br>

1. WHEN the start button is selected, a timer starts counting down and the first question is presented.
    > An event listener tied to the start quiz button calls the function that reveals the hidden quiz HTML elements. It also starts the timer for the quiz. Once the timer reaches 0 or, int he event is less than 0 due to incorrect answers, the user is immediately taken to the final page where they are prompted to input their initials. This occurs regardless of whether or not they complete the quiz.

<br>

2. WHEN an answer is selected, the next question populates the page.
    > All questions, answers, and associated boolean values are stored in the quiz array. Within the array are objects that hold the question, answer, and boolean values associated with the answers. When the start button is clicked, the function questionPopulation is called with the argument vlaue of i declared in the beginning of the script. The start button also increments i by one to begin the proper sequencing of the questionPopulation function. As a user clicks on the options, an event listener recalls the questionPopulation function with the current value of i, then increments i by one again to prime the quiz for the next call of questionPopulation.

<br>

3. WHEN selecting an incorrect answer, 15 seconds are subtracted from the timer. If a correct answer is selected no time is subtracted and one point is added to the score.
    > The function answerChecker is tied to event listeners for each of the answer elements. Using data-sets, the script can dynamically change data attributes to pass into the answerChecker function to ensure the appropriate boolean values are associated with the answer selected. If the boolean value is true, a point is added to the score. If false, 15 seconds are subtracted from the timer and the next question function is called.
<br>

4. WHEN the user answers all the questions or when the timer reaches 0, the user is taken to the final page where they are prompted to input their initials.
    > When either the final question is answered or the timer reaches 0, the finalPage function is called and the user is taken to the end of the quiz. At this point new HTML elements are generated creating a simple form with text input and a submit button.

<br>

5. WHEN the user types in their initials and clicks submit, their initials and score are displayed along with the remaining time on their attempt.
    > Once the user has reached the final page and type in their initials, they click submit and their initials are taken from the text input, the remaining time left on the timer and their score are also pulled and displayed on the screen for them to see. The leaderboard will list all users who hav attempted to take the quiz using local storage. The user is presented with an option to either restart the quiz or clear the leaderboard. Clearing the leaderboard will remove the currently listed attempts while also emptying local storage. Restart will reload the page for the user to make another attempt. Reloading the page preserves the leaderboard so the user(s) can compare prior attempts. Leaderboard is not sorted in anyway but is rather listed in chronological order of attempts.

<br>
<br>

### Screenshots ###

---

<br>

![myscreenshot](./Assets/screenshot1.png)

<br>

Initial state

<br>

  ---

<br>

![alt text](./Assets/ScreenCastGif.gif)

<br>

Start of quiz, demonstrating timer & score

<br>

  ---

<br>

![myscreenshot](./Assets/screenshot2.png)

<br>

User inputs their initial at completion of quiz

<br>

---

<br>

![myscreenshot](./Assets/screenshot3.png)

<br>

Scoreboard showing the users initials, score, and remaining time on their attempt.

<br>

### Links ###

---

<br>


Link to Github repo: https://github.com/JDReeves86/04ChallengeTurnIn


Link to live page: https://jdreeves86.github.io/04ChallengeTurnIn/

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

---

---

## Assignment Details & Grading Rubric ##

---

---

<br>
<br>






# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the Challenge instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
