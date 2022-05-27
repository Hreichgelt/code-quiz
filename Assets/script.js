// changing syntax and putting all items in array into list 
const quizQuestions = [
    {
        question: "What language is used to create the structure of a webpage?",
        answers: ["C++", "HTML", "CSS", "Boolean"],
        correct: "HTML"
    },

    {
        question: "Which command in terminal/gitbash shows you accessible folders/files in a directory?",
        answers: ["LS","PWD","CD", "CSS"],
        correct: "LS",
    },

    {
        question: "Which of the following can make up a string?",
        answers: ["Letters", "Numbers", "Symbols", "All of the above"],
        correct: "All of the above",
    },

    {
        question: "which of the following correctly represents a for-loop?",
        answers: ["for (let index = 0; index < array.length; index++) {const element = array[index];", "for (i = 0: y > array; i++) {const element - [i];", 
        "for (i = x; i < array.length; i--) {integer = [i];", "for (i = 0; i > length; i++) {interger + [i];"],
        correct: "for (let index = 0; index < array.length; index++) {const element = array[index];",
    },

    {
        question: "which server is commonly used for collaborative projects?",
        answers: ["W3Schools", "Adobe Suite", "GitLab", "GitHub"],
        correct: "GitHub",
    },

]

var starter = document.querySelector("#start-quiz");
var questions = document.querySelector("#questions");
var gameOver = document.querySelector("#endo");
var countDown = document.querySelector("#clock");
// changing response to answers for clarity while working 
var answers = document.querySelector("#answers");
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
    // starting at 
    renderQuestions(quizQuestions[0]);
});

answers.addEventListener("click", function (event) {
 if (event.target.textContent !== quizQuestions[increase - 1].correct) {
        answers.textContent = "NOPE - WRONG";
        secondsLeft -= 5;
    } else {
        answers.textContent = "YUP -- RIGHT";
        console.log(secondsLeft);


    }
    increase++;
    renderQuestions(quizQuestions[increase])
});
// changing logic of where render question happens so it doesnt matter if its right or wrong
// also once we run out of questions the well done game over shows on screen 
function renderQuestions(currentQuest) {
    if (increase === 5) {
        answers.textContent = "Well Done! Game Over";
        points.textContent = secondsLeft
    } else {
    questions.textContent = currentQuest.question;
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
    ans1.textContent = currentQuest.answers[0];
    ans2.textContent = currentQuest.answers[1];
    ans3.textContent = currentQuest.answers[2];
    ans4.textContent = currentQuest.answers[3];

    // append child for questions 
    options.append(ans1);
    options.append(ans2);
    options.append(ans3);
    options.append(ans4);
    questions.append(questLab);
    answers.append(options);

    }


    // create var that creates a button 
    // in onclick when choosing answer increment to next question 
    //  if they click the right answer it add points and moves to next screen 
};

// adding timer function 
//  double clicked and it doubles in speed
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