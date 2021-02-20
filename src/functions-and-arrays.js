/*
 * @author lotik
 * @date 02/2021
 *
 * ironHack course lab-javascript-basic-algorithms
 *
 */
// Iteration #1: Find the maximum
/**
 * return the greatest number of the two parameter
 * @param {number} nb1
 * @param {number} nb2
 */
function maxOfTwoNumbers(nb1, nb2) {
  if (nb1 >= nb2) {
    return nb1;
  } else {
    return nb2;
  }
}
// Iteration #2: Find longest word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
/**
 * return the longest word in array of words, if no word in array return null
 * @param {string[]} arrayOfWords
 * @return {?string} longest word or null
 */
function findLongestWord(arrayOfWords) {
  if (arrayOfWords.length === 0) {
    return null;
  }
  let longestWord = "";
  for (const words of arrayOfWords) {
    if (longestWord.length < words.length) {
      longestWord = words;
    }
  }
  return longestWord;
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
/**
 * return the sum of all number in array of number, if no number in array return 0
 *
 * @param {number[]} arrayOfNumber
 * @returns {number} sum or zero
 */
function sumNumbers(arrayOfNumber) {
  if (arrayOfNumber.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const number of arrayOfNumber) {
    sum += number;
  }
  return sum;
}
/// Bonus iteration #3 : Calculate sum with polymorphism
/**
 * return sum of an array with mixed value of string, number and boolean
 * according to these rules:
 * number = number value,
 * string = string length,
 * true = 1,
 * false = 0
 * return an error if object or array inside the mixedArray
 *
 * @param {string|number|boolean[]} mixedArray
 * @returns {number|Error}
 */
function sum(mixedArray) {
  if (mixedArray.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const value of mixedArray) {
    let type = typeof value;
    switch (type) {
      case "number":
        sum += value;
        break;
      case "string":
        sum += value.length;
        break;
      case "boolean":
        if (value) {
          sum++;
        }
        break;

      default:
        throw new Error("Unsupported data type sir or ma'am");
    }
  }
  return sum;
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
/**
 * return the average of array number
 *
 * @param {number[]} arrayOfNumber
 * @returns {?number}
 */
function averageNumbers(arrayOfNumber) {
  if (arrayOfNumber.length === 0) {
    return null;
  }
  return sumNumbers(arrayOfNumber) / arrayOfNumber.length;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];
/**
 * make average of all length of string in an array with only string.
 *
 * @param {string[]} arrayOfString
 * @returns {number} the average length of words in the arrayOfString parameter
 */
function averageWordLength(arrayOfString) {
  if (arrayOfString.length === 0) {
    return null;
  }
  ////// TODO test pour chaque mauvais type
  for (const str of arrayOfString) {
    if (typeof str !== "string") {
      throw new Error(
        `Parameter must contain only string but it contain at least one ${typeof str} `
      );
    }
  }
  return sum(arrayOfString) / arrayOfString.length;
}
// Bonus - Iteration #4.1: A generic `avg()` function
/**
 * make average of all value in array
 * according to these rules:
 * number = number value,
 * string = string length,
 * true = 1,
 * false = 0
 * return false if object or array inside the mixedArray
 *
 * @param {string|number|boolean} mixedArray
 * @returns {number}
 */
function avg(mixedArray) {
  if (mixedArray.length === 0) {
    return null;
  }
  /// TODO test pour le catch voir si renvoi bien false
  try {
    // return (Math.round(sum(mixedArray) / mixedArray.length) * 100) / 100;
    return Math.round((sum(mixedArray) / mixedArray.length) * 100) / 100;
  } catch (error) {
    return false;
  }
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

// Iteration #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
];
