let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let display = document.getElementById("display");
let timer = null;

function updateDisplay() {
  let d = days < 10 ? "0" + days : days;
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${d}:${h}:${m}:${s}`;
}

function stopWatch() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours >= 24) {
    hours = 0;
    days++;
  }
  updateDisplay();
}

function start() {
  if (timer !== null) return;

  timer = setInterval(stopWatch, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  clearInterval(timer);
  timer = null;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}
