export const formatTime = (time) => {
  if (typeof time !== 'number' || time < 0) {
    return null;
  }

  return new Date(time * 1000).toISOString().substr(11, 8);

  //   const seconds = Math.floor(time % 60);
  //   const minutes = Math.floor((time / 60) % 60);
  //   const hours = Math.floor(time / 3600);

  //   return `${ifLowerThenNine(hours)}:${ifLowerThenNine(
  //     minutes
  //   )}:${ifLowerThenNine(seconds)}`;
};

// function ifLowerThenNine(value) {
//   return String(value).padStart(2, '0');
// }
