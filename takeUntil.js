const takeUntil = function(array, callback) {
  const output = [];
  for (let item in array) {
    if (!callback(array[item])) {
      output.push(array[item]);
    } else {
      return output;
    }
  }
  return output;
};

module.exports = takeUntil;