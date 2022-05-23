// solution 1
// time - O(n^2) | space - O(n)
const threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  // fix one of the numbers
  for (let i = 0; i < nums.length; i++) {
    const value = 0 - nums[i];
    // two sum problem
    twoSum(nums, value, i, result);
  }
  return result;
};

const twoSum = function (nums, value, i, result) {
  let leftIdx = i + 1;
  let rightIdx = nums.length - 1;
  while (leftIdx < rightIdx) {
    const sum = nums[leftIdx] + nums[rightIdx];
    if (sum === value) {
      result.push([nums[i], nums[leftIdx], nums[rightIdx]]);
      leftIdx++;
      rightIdx--;
    } else if (sum < value) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }
};
