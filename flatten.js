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

module.exports = flatten;