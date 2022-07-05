const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  let string = 'Hey harry';
  let object = letterPositions(string);
  let expected = {
    H: [ '0' ],
    e: [ '1' ],
    y: [ '2', '8' ],
    h: [ '4' ],
    a: [ '5' ],
    r: [ '6', '7' ]
  }

  it("passes if letterPositions('Hey harry') is deepEqual to expected", () => {
    assert.deepEqual(object,expected);
  }) 
  it("fails if key ' ' exists", () => {
    assert.notProperty(object, ' ');
  }) 
})