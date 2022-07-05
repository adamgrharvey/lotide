const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe("#eqArrays", () => {
  it("eqArrays([1, 2, 3], [1, 2, 3]) returns true", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("eqArrays([1, 2, 3], [3, 2, 1]) returns false", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('eqArrays(["1", "2", "3"], ["1", "2", "3"]) returns true', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('eqArrays(["1", "2", "3"], ["1", "2", 3]) returns false', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it("eqArrays([[2, 3], [4]], [[2, 3], [4]]) returns true", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]) returns false", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it("eqArrays([[2, 3], [4]], [[2, 3], 4]) returns false", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true

// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
// assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false