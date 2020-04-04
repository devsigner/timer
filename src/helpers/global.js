function computePercent(total, value) {
  return Math.floor((value * 100) / total)
}

function formatTimer(time) {
  let seconds = time % 60;
  let minutes = Math.floor(time / 60);
  minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
  return minutes + ':' + seconds;
}

function timeToSeconds(time) {
  const minutes = parseInt(time[1], 10);
  const seconds = time[2] ? parseInt(time[2], 10) : 0;

  return minutes * 60 + seconds;
}

export { timeToSeconds, formatTimer, computePercent };
