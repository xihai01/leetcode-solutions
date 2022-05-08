// solution 1
// time - O(logn) | space - O(1)
const binarySearch = function (array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (array[middle] === target) {
      return middle;
    }
    if (array[middle] < target) {
      left = middle + 1;
    }
    if (array[middle] > target) {
      right = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
