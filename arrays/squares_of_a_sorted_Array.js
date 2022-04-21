// solution 1
// time - O(nlogn) | space - O(n)
var sortedSquares = function(nums) {
  const square = nums.map((elm) => elm * elm);
  return square.sort((a, b) => a - b);
};

// solution 2
// time - O(n) | space - O(n)
var sortedSquares = function(nums) {
  const newArray = [];
  let left = 0;
  let right = nums.length - 1;
  let newIndex = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];
    if (rightSquare > leftSquare) {
      newArray[newIndex] = rightSquare;
      right--;
    } else {
      newArray[newIndex] = leftSquare;
      left++;
    }
    newIndex--;
  }
  return newArray;
};