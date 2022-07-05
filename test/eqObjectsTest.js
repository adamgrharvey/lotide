const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

  it("passes if eqObjects(cd, dc) is true", () => {
    assert.isTrue(eqObjects(cd, dc));
  }) 
  it("passes if eqObjects(cd, cd2) is false", () => {
    assert.isFalse(eqObjects(cd, cd2));
  })
  it("passes if eqObjects(ab, ba) is true", () => {
    assert.isTrue(eqObjects(ab, ba));
  })
  it("passes if false", () => {
    assert.isFalse(eqObjects(ab, abc));
  })
  it("passes if false", () => {
    assert.isTrue(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  })
  it("passes if false", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  })
  it("passes if false", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));
  })
})





// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false) // => false