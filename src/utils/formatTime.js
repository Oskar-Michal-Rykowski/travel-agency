export const formatTime = (time) => {
  if (
    time === undefined ||
    typeof time == 'string' ||
    typeof time == 'function' ||
    time < 0
  ) {
    return null;
  } else {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time / 3600);

    return `${ifLowerThenNine(hours)}:${ifLowerThenNine(
      minutes
    )}:${ifLowerThenNine(seconds)}`;
  }
};

function ifLowerThenNine(value) {
  if (value <= 9) {
    value = '0' + value;
    return value;
  } else {
    return value;
  }
}
