var time = document.getElementById("time");
var times = document.getElementById("times");
var timer;
var start;
var ms = 0;
var running = false;
time.innerHTML = convertMsToTime(0);

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${padTo2Digits(milliseconds % 1000)}`;
}
function startTimer() {
  if (running)
    return;
  running = true;
  start = Date.now();
  timer = setInterval(() => {
    ms += 10;
    var stringTime = convertMsToTime(ms);
    time.innerHTML = stringTime;
  }, 10);
}

function lapTimer() {
  let li = document.createElement('li');
  li.innerHTML = convertMsToTime(ms);
  times.appendChild(li);
}

function stopTimer() {
  if (!running)
    return;
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  time.innerHTML = convertMsToTime(0);
  ms = 0;
}

function clearLaps() {
  times.innerHTML = "";
}

