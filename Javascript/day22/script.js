let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;

// Select elements
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const msEl = document.getElementById("millisecond");

const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

function updateDisplay() {
  // padStart ensures that your text reaches certain length. for that, it should be in string
    hourEl.innerText = hours.toString().padStart(2, '0');
    minuteEl.innerText = minutes.toString().padStart(2, '0');
    secondEl.innerText = seconds.toString().padStart(2, '0');
    msEl.innerText = milliseconds.toString().padStart(3, '0');
}

function startTimer() {
    if (timer !== null) return;
    timer = setInterval(function () {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        updateDisplay();
    }, 10);
    
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);