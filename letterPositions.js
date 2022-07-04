const letterPositions = function(string) {
  const letterPositions = { };
  for (const i in string) {
    if (string[i] === ' ') {
      continue;
    }
    if (letterPositions[string[i]]) {
      letterPositions[string[i]].push(i);
    } else {
      letterPositions[string[i]] = [i];
    }
  }
  return letterPositions;
};

module.exports = letterPositions;