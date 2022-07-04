const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  let values = Object.values(object);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === value) {
      return keys[i];
    }
  }
};

module.exports = findKeyByValue;