function startTimer() { 
    var startButton = $("#startButton");
    console.log (startButton)

    var timeDisplay =$(".time")
    var timerCount = 75 
     setInterval(function() {
         timerCount--;
     
         timeDisplay.text(timerCount)
         console.log(timerCount)       
 }, 1000);




}

