const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const i in arr1) {
    if (Array.isArray(arr1[i]) || Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return eqArrays(arr1[i], arr2[i]);
      }
    }  
    
    else if ((arr1[i] !== arr2[i])) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
