export const formatTime = (time) => {
  if (typeof time !== 'number' || time < 0) {
    return null;
  }
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor((time / 60) % 60);
  const hours = Math.floor(time / 3600);

  return `${ifLowerThenNine(hours)}:${ifLowerThenNine(
    minutes
  )}:${ifLowerThenNine(seconds)}`;
};

function ifLowerThenNine(value) {
  if (value <= 9) {
    const newValue = value.toString().padStart(2, '0');
    return newValue;
  }
}
