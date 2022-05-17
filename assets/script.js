function question1() {
    var questions = $("#questions")

    questions.text("what color is the sky?")
var answer = "blue"
// if wrong 
// timer count -=2 


}


















var timerCount = 75 

function startTimer() { 
    var startButton = $("#startButton");
    console.log (startButton)

    var timeDisplay =$(".time")
     setInterval(function() {
         timerCount--;
     
         timeDisplay.text(timerCount)
         console.log(timerCount)       
 }, 1000);
 question1()
}