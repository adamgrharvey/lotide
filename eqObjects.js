
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (const i of object1Keys) {

    if (typeof object1[i] === 'object' && typeof object2[i] === 'object') {
      if (!Array.isArray(object1) && !Array.isArray(object2)) {
        return eqObjects(object1[i], object2[i]);
      }
    }

    if (Array.isArray(object1[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    } else if (object1[i] !== object2[i]) {
      return false;
    }
  }
  return true;

};

module.exports = eqObjects;
