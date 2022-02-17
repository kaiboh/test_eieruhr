var alarm = new Audio('alarm.wav');
var timerStarted = false;
var timerObject; 
var timerMinutes = 6;
document.querySelector('#timer').innerHTML = '0' + timerMinutes.toString() + ' : 00';

function startTimer() 
{ 

    if (timerStarted === false) 
    {
        let startTime = new Date().getTime();
        let fiveMinutes = 1000 * 60 * timerMinutes;
        let endTime = startTime + fiveMinutes;

        timerObject = setInterval(function() 
        { 
            let timeLeft = endTime - new Date().getTime();

            if (timeLeft > 0) 
            {
                let minutes = timeLeft / (1000 * 60); 
                minutes = Math.floor(minutes);
                let seconds = (timeLeft / 1000) % 60; 
                seconds = Math.round(seconds); 
                seconds = ('0' + seconds).slice(-2);
                let text = '0' + minutes + ' : ' + seconds; 
                timer.innerHTML = text; 
            } 
            else 
            {
                alarm.play();
                timer.innerHTML = '00 : 00';
            }
        }, 1000);
        document.querySelector('#startButton').innerHTML = 'timer started - click to stop';
        timerStarted = true;
    }  
    else
    {
        clearInterval(timerObject);
        timerStarted = false;
        document.querySelector('#timer').innerHTML = '0' + timerMinutes.toString() + ' : 00';

        document.querySelector('#startButton').innerHTML = 'start'
    } 
}
