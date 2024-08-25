let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("timer");

function padStart(value) {
    return String(value).padStart(2,"0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${minutes}:${seconds}`;
}

function timer() {
    secondsElapsed++;
    setTime();
}

function startClock() {
    if(interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed =0;
    setTime()
}