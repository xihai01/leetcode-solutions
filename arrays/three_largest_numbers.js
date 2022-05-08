// solution 1
// time - O(n) | space O(1)
const threeLargestNumbers = function (array) {
  const output = [];
  // list of forbidden indexes
  const indexList = {};

  let i = 0;
  while (i < 3) {
    let max = Number.NEGATIVE_INFINITY;
    let maxIndex = 0;
    array.forEach((element, index) => {
      // skip element if its index is in indexList
      if (!indexList[index]) {
        if (element > max) {
          max = element;
          maxIndex = index;
        }
      }
    });
    output.push(max);
    indexList[maxIndex] = true;
    i++;
  }
  return output.sort((a, b) => a - b); // -> constant time (length is always 3)
};

// solution 2
// time - O(n) | space - O(1)
const threeLargestNumbers = function (array) {
  // initialize empty array of length 3
  const threeLargestNum = [null, null, null];
  // loop through each num in array
  for (const num of array) {
    // call a helper to update threeLargestNum array
    updateThreeLargestNum(threeLargestNum, num);
  }
  return threeLargestNum;
};

const updateThreeLargestNum = function (threeLargestNum, num) {
  // update and shift num if needed
  if (threeLargestNum[2] === null || num > threeLargestNum[2]) {
    shift(threeLargestNum, num, 2);
  } else if (threeLargestNum[1] === null || num > threeLargestNum[1]) {
    shift(threeLargestNum, num, 1);
  } else if (threeLargestNum[0] === null || num > threeLargestNum[0]) {
    shift(threeLargestNum, num, 0);
  }
};

const shift = function (threeLargestNum, num, index) {
  for (let i = 0; i < index; i++) {
    if (index === i) {
      threeLargestNum[i] = num;
    } else {
      threeLargestNum[i] = threeLargestNum[i + 1];
    }
  }
};

console.log(threeLargestNumbers([10, 5, 9, 10, 12]));
console.log(threeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]));
