const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // initialize a new object to return to add values to, this is returned later
  let countedItems = {
  };

  // iterate through the list of items
  for (const i in allItems) {
  // if we need to count that item, tally it up
    if (itemsToCount[allItems[i]] === true) {
    // first check if its been created already, if not make it
      if (countedItems[allItems[i]] === undefined) {
        countedItems[allItems[i]] = 1;
      }

      // if it has been added already, increment it
      else {
        countedItems[allItems[i]] += 1;
      }
    }
  }
  // return our final counted items
  return countedItems;


};

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);