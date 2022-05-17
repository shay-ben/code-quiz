function question1() {
    var questions = $("#questions")
}

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["1. stings","2. booleans","3. alerts","4. numbers"],
        answer: "3. alerts"
    },
    {
        question: "The condition in an if/else statment is enclosed within ___.",
        choices:["1. quotes","2. curly brackets","3. parentheses","4. square brackets"],
        answer: "3. parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        choices:["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"],
        answer: "4. all of the above"
    },
    {
        question: "Strings values must be enclosed within ___ when being assigned to variables.",
        choices:["1. commas","2. curly brackets","3. quotes","4. parentheses"],
        answer: "3. quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. javascript","2. terminal/bash","3. for loops","4. console.log"],
        answer: "4. console.log"
    }
];


var timerCount = 75 

function startTimer() { 
    var startButton = $("#startButton");
    console.log (startButton)

    var timeDisplay =$(".timer")
     setInterval(function() {
         timerCount--;
     
         timeDisplay.text(timerCount)
         console.log(timerCount)       
 }, 1000);
 question1()
}