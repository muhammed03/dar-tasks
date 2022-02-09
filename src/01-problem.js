function colorPatternTimes(arr) {
  let count = arr.length * 2;
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] !== arr[index - 1]) {
      count++;
    }
  }
  return count;
}

module.exports = {
  colorPatternTimes,
};
