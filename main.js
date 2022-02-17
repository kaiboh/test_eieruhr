let alarm = new Audio('alarm.wav');
let timerStarted = false;
let timerObject;
let timerMinutes = 6;
document.querySelector('#timer').innerHTML = '0' + timerMinutes.toString() + ' : 00';

function startTimer() {

    if (timerStarted === false) {
        const startTime = Date.now();
        const fiveMinutes = 1000 * 60 * timerMinutes;
        const endTime = startTime + fiveMinutes;

        timerObject = setInterval(function() {
            const timeLeft = endTime - Date.now();

            if (timeLeft > 0) {
                let minutes = timeLeft / (1000 * 60);
                minutes = Math.floor(minutes);
                let seconds = (timeLeft / 1000) % 60;
                seconds = Math.round(seconds);
                seconds = ('0' + seconds).slice(-2);
                const text = '0' + minutes + ' : ' + seconds;
                timer.innerHTML = text;
            } else {
                alarm.play();
                timer.innerHTML = '00 : 00';
                }
        }, 1000);
        document.querySelector('#startButton').innerHTML = 'timer started - click to stop';
        timerStarted = true;
        }
    else {
        clearInterval(timerObject);
        timerStarted = false;
        document.querySelector('#timer').innerHTML = '0' + timerMinutes.toString() + ' : 00';
        document.querySelector('#startButton').innerHTML = 'start';
    }
}
