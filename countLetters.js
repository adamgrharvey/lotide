const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(countLetters('LHL'));