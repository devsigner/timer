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

function timeToSeconds(strSeconds) {
  const found = strSeconds.match(/([0-9]+):?([0-9]*)/)
  if (found == null) return 0;

  const minutes = parseInt(found[1], 10);
  const seconds = found[2] ? parseInt(found[2], 10) : 0;

  return minutes * 60 + seconds;
}

export { timeToSeconds, formatTimer, computePercent };
