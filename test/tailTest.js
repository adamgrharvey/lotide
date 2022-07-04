const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail case 1', () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  it('should be true if tails returns "Labs" from ["Lighthouse", "Labs"]', () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);

  })
  it('result.length should be 2', () => {
    assert.equal(result.length, 2);
  })
  it('result[0] should be "Lighthouse"', () => {
    assert.equal(result[0], "Lighthouse");
  })
  it('result[1] should be "Labs"', () => {
    assert.equal(result[1], "Labs");
  })
})
describe('#tail case 2', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  tail(words); // no need to capture the return value since we are not checking it
  it('should pass if the original array still has 3 elements',() => {
    assert.equal(words.length,3);
  })
})
