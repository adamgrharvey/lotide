const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
   "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  let result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("pass if ['Jason'] equals 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("pass if ['Karima'] is undefined", () => {
    assert.isUndefined(result1["Karima"]);
  });

  it("pass if ['Fang'] equals 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("pass if ['Agouhanna'] is undefined", () => {
    assert.isUndefined(result1["Agouhanna"]);
  });
});

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);