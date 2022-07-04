const middle = function(arr) {
  const halfway = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return [];
  }

  if (arr.length % 2 === 1) {
    return [arr[halfway]];
  } else {
    return [arr[halfway - 1], arr[halfway]];
  }
};

module.exports = middle;