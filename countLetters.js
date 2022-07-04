const countLetters = function(string) {
  const uniqueLetters = { };
  for (const i in string) {
    if (uniqueLetters[string[i]]) {
      uniqueLetters[string[i]]++;
    } else {
      uniqueLetters[string[i]] = 1;
    }
  }
  return uniqueLetters;
};

module.exports = countLetters;