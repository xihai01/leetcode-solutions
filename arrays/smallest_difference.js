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
