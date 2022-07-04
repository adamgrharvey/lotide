# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adamgrharvey/lotide`

**Require it:**

`const _ = require('@adamgrharvey/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: given an array, returns the first element of the array.
* `tail`: takes an array, returns a new array with all elements except the first one.
* `countOnly`: given an array, and an object containing items that need to be counted, return an object with which items were found and how many times they were found.
* `countLetters`: given a string, count how many unique characters were found, and how many of each. returns the count as an object.
* `findKey`: given an object, and a function. return first key that matches the function conditionals.
* `findKeyByValue`: given an object and another argument, return the key whose value matches that parameter.
* `reverse`: Used in terminal. Passes any number of strings as arguments, prints those strings in reverse order. i.e. 'stop' argument prints 'pots'
* `takeUntil`: given an array, and a boolean function; returns a slice of the given array up to when the boolean function returns true
* `flatten`: given an array, returns a new array without any nested arrays within. i.e. [1,[2],3] returns [1,2,3].