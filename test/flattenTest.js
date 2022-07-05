const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns true if flat", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});

//console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]