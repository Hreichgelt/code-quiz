// add questions up here 
// use material from 05 sandbox image cycle and translate to this challenge
// dont use jquery on this
const quizQuestions = [
    {
        question: "What language is used to create the structure of a webpage?",
        answers: {
            1: "C++",
            2: "HTML",
            3: "CSS",
            4: "Boolean",
        },
        correct: "HTML",
    },

    {
        question: "Which command in terminal/gitbash shows you accessible folders/files in a directory?",
        answers: {
            1: "LS",
            2: "PWD",
            3: "CD",
            4: "CSS",
        },
        correct: "LS",
    },

    {
        question: "Which of the following can make up a string?",
        answers: {
            1: "Letters",
            2: "Numbers",
            3: "Symbols",
            4: "All of the above",
        },
        correct: "All of the above",
    },

    {
        question: "which of the following correctly represents a for-loop?",
        answers: {
            1: "for (let index = 0; index < array.length; index++) {const element = array[index];",
            2: "for (i = 0: y > array; i++) {const element - [i];",
            3: "for (i = x; i < array.length; i--) {integer = [i];",
            4: "for (i = 0; i > length; i++) {interger + [i];"
        },
        correct: "for (let index = 0; index < array.length; index++) {const element = array[index];",
    },

    {
        question: "which server is commonly used for collaborative projects?",
        answers: {
            1: "W3Schools",
            2: "Adobe Suite",
            3: "GitLab",
            4: "GitHub"
        },
        correct: "GitHub",
    },

]

// var starter = "start";
// var quizy = "quiz";
// var endo = "end";
// var countDown = "clock"
// var highSchore = "High"
// var startButton = document.querySelector("#start-button")
var starter = document.querySelector("#start-quiz");
var questions = document.querySelector("#questions");
var gameOver = document.querySelector("#endo");
var countDown = document.querySelector("#clock");
var response = document.querySelector("#answers");
var leaderBoard = document.querySelector("#leaders");
var points = document.querySelector("#score");
var submit = document.querySelector("#submit");
var name = document.querySelector("#initials");
var secondsLeft = 50;
var events = [];
var increase = 1;

// adding event listeners for start of quiz and timer
starter.addEventListener("click", function () {
    clock();
    renderQuestions(questions[0]);
});

questions.addEventListener("click", function (event) {
    if (increase === 5) {
        response.textContent = "Well Done! Game Over";
        points.textContent = secondsLeft
    } else if (
        event.target.textContent !== quizQuestions[increase - 1].correct
    ) {
        response.textContent = "NOPE - WRONG";
        secondsLeft -= 5;
    } else {
        response.textContent = "YUP -- RIGHT";
        console.log(secondsLeft);
        increase++;
        renderQuestions(quizQuestions[increase])
    }
});

function renderQuestions(currentQuest) {
    questions.textContent = quizQuestions[0].question;
    // Need to add questions to webpage using create element
    // adding questions to show on HTML
    var questLab = document.createElement("div");
    var options = document.createElement("ol");
    var ans1 = document.createElement("li");
    var ans2 = document.createElement("li");
    var ans3 = document.createElement("li");
    var ans4 = document.createElement("li");
    var ans5 = document.createElement("li");

    questLab.textContent = currentQuest.questions;
    ans1.textContent = currentQuest.response[1];
    ans2.textContent = currentQuest.response[2];
    ans3.textContent = currentQuest.response[3];
    ans4.textContent = currentQuest.response[4];
    ans5.textContent = currentQuest.response[5];

    questLab.textContent = currentQuest.questions;
    ans1.textContent = currentQuest.answers[1];
    ans2.textContent = currentQuest.answers[2];
    ans3.textContent = currentQuest.answers[3];
    ans4.textContent = currentQuest.answers[4];
    ans5.textContent = currentQuest.answers[5];
   
    // append child for questions 
    // create var that creates a button 
    // in onclick when choosing answer increment to next question 
    //  if they click the right answer it add points and moves to next screen 
};

// adding timer function 
function clock() {
    var timer = setInterval(function () {
        if (secondsLeft > 0) {
        countDown.textContent = secondsLeft;
        secondsLeft--;
    } else {
        clearInterval(timer);
    }
}, 1000);
};


// function displayState() {
//     if (state === "start") {
//         starter.display = "block";
//         quizy.display = "none";
//         endo.display = "none";
//     }
// }
// function displayState() {
//     if (state === "quiz") {
//         starter.display = "none";
//         quizy.display = "block";
//         endo.display = "none";
//     }
//     function displayState() {
//         if (state === "end") {
//             starter.display = "none";
//             quizy.display = "none";
//             endo.display = "block";
//         }
//     }

//     function init() {
//         displayState();
//     }
//     init()

// }