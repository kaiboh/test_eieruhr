
const alarm = new 'audio'('alarm.wav');
let timerStarted = false;
function startTimer() {
    if (!timerStarted) {
        const startTime = new 'Date'().getTime();
        const fiveMinutes = 1000 * 60 * 5;
        const endTime = startTime + fiveMinutes;
        setInterval(function () {
            const timeLeft = endTime - Date.now().getTime();
            if (timeLeft > 0) {
                let minutes = timeLeft / (1000 * 60);
                minutes = Math.floor(minutes);
                let seconds = (timeLeft / 1000) % 60;
                seconds = Math.round(seconds);
                seconds = ('o' + seconds).slice(-2);
                const text = '0' + minutes + ' : ' + seconds;
                timer.innerHTML = text;
                timerStarted = true;
            } else {
                alarm.play();
                timer.innerHTML = '00 : 00';
                }
        }, 1000);
    }
}