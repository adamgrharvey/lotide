const words = ["ground", "control", "to", "major", "tom"];
const moreWords = ["keep", "your", "feet", "on", "the", "ground"];
const numbers = [1,2,3];
const firstLetterOfString = function(string) {
  return string[0];
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual(map(words, firstLetterOfString), ['g','c','t','m','t']);
assertArraysEqual(map(numbers, x => x * 2), [2,4,6]);
assertArraysEqual(map(moreWords, x => x[0]), ['k','y','f','o','t','g']);