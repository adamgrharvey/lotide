const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(letterPositions('Hey harry'));