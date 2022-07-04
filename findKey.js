const findKey = function(object, callback) {
  let keys = Object.keys(object);
  let values = Object.values(object);
  for (let item in values) {
    if (callback(values[item])) {
      return keys[item];
    }
  }
  return undefined;
};

module.exports = findKey;