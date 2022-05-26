// add questions up here 
const questions = [
    {
        question1: "What language is used to create the structure of a webpage?",
        answers: {
            1: "C++",
            2: "HTML",
            3: "CSS",
            4: "Boolean",
        },
        correct: "HTML",
    },

    {
        question2: "Which command in terminal/gitbash shows you accessible folders/files in a directory?",
        answers: {
            1: "LS",
            2: "PWD",
            3: "CD",
            4: "CSS",
        },
        correct: "LS",
    },

    {
        question3: "Which of the following can make up a string?",
        answers: {
            1: "Letters",
            2: "Numbers",
            3: "Symbols",
            4: "All of the above",
        },
        correct: "All of the above",
    },

    {
        question4: "which of the following correctly represents a for-loop?",
        answers: {
            1: "for (let index = 0; index < array.length; index++) {const element = array[index];",
            2: "for (i = 0: y > array; i++) {const element - [i];",
            3: "for (i = x; i < array.length; i--) {integer = [i];",
            4: "for (i = 0; i > length; i++) {interger + [i];"
        },
        correct: "for (let index = 0; index < array.length; index++) {const element = array[index];",
    },

    {
        question5: "which server is commonly used for collaborative projects?",
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
var starter = document.querySelector("#starter");
var quizy = document.querySelector("#quizy");
var endo = document.querySelector("#endo");
var startButton = document.querySelector("#start-button")
var countDown = document.querySelector("#clock")
// do the same for quiz and end then create an event listener 


// add event listeners down here for start button quiz and end 
starter.addEventListener("click", function(){
    clock();
    renderQuestions(questions[0]);
});

quizy.addEventListener("click", function(){

})



function displayState() {
    if (state === "start") {
        starter.display = "block";
        quizy.display = "none";
        endo.display = "none";
    }
}
function displayState() {
    if (state === "quiz") {
        starter.display = "none";
        quizy.display = "block";
        endo.display = "none";
    }
    function displayState() {
        if (state === "end") {
            starter.display = "none";
            quizy.display = "none";
            endo.display = "block";
        }
    }

    function init() {
        displayState();
    }
    init()

}