// solution 1
// time - O(n*m) | space - O(n*m)
const smallestDifference = function (arrayOne, arrayTwo) {
  // use a hash => {key: abs difference, value: pair of int [a, b]}
  const hash = {};
  // loop thru arrayOne
  for (const i of arrayOne) {
    for (const j of arrayTwo) {
      const absDiff = Math.abs(i - j);
      hash[absDiff] = [absDiff, i, j];
    }
  }
  // loop thru arrayTwo
  // calc the absolute difference

  // loop through has
  let absDiff = Number.POSITIVE_INFINITY;
  for (const key in hash) {
    if (hash[key][0] < absDiff) {
      absDiff = hash[key][0];
    }
  }
  return [hash[absDiff][1], hash[absDiff][2]];
};

// solution 2
// time - O(n*m) | space - O(1)
const smallestDifference = function (arrayOne, arrayTwo) {
  let smallestAbsDiff = Number.POSITIVE_INFINITY;
  let smallestPair = [0, 0];
  // loop thru arrayOne
  for (const i of arrayOne) {
    for (const j of arrayTwo) {
      const absDiff = Math.abs(i - j);
      if (absDiff < smallestAbsDiff) {
        smallestAbsDiff = absDiff;
        smallestPair[0] = i;
        smallestPair[1] = j;
      }
    }
  }
  return smallestPair;
};

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));

// solution 3
// time - O(nlogn + mlogm) | space - O(1)
const absDiff = function (arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b); // x
  arrayTwo.sort((a, b) => a - b); // y
  let xIndex = 0;
  let yIndex = 0;
  let smallestArr = [null, null];
  let smallestDiff = Number.POSITIVE_INFINITY;
  while (xIndex < arrayOne.length && yIndex < arrayTwo.length) {
    const xNumber = arrayOne[xIndex];
    const yNumber = arrayTwo[yIndex];
    const currentDiff = Math.abs(xNumber - yNumber);
    if (xNumber < yNumber) {
      xIndex++;
    } else if (yNumber < xNumber) {
      yIndex++;
    } else {
      return [xNumber, yNumber];
    }

    // update smallest diff and its array of pairs
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      smallestArr[0] = xNumber;
      smallestArr[1] = yNumber;
    }
  }
  return smallestArr;
};

console.log(absDiff([-1, 3, 5, 10, 20, 28, 35], [15, 17, 26, 134, 135]));
