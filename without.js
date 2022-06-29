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

const without = function(arr, ...toRemove) {
  const newArr = JSON.parse(JSON.stringify(arr));
  
  for (const i in arr) {
    for (const j in toRemove) {
      if (Array.isArray(toRemove[j])) {
        for (const k in toRemove[j]) {
          if (toRemove[j][k] === newArr[i]) {
            newArr.splice(i, 1);
          }
        }
      } else {
        if (toRemove[j] === newArr[i]) {
          newArr.splice(i,1);
        }
      }

    }
  }
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without([1,"1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]