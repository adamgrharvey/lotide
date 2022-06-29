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

const flatten = function(arr) {
  let flattenedArr = [];
  return helper(arr, flattenedArr);
};

const helper = function(arr, flattenedArr) {
  for (const i in arr) {
    if (Array.isArray(arr[i])) {
      helper(arr[i], flattenedArr);
    }
    else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]