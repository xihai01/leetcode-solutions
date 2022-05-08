// solution 1
// time - O(n) | space - O(n)
const palindrome = function (string) {
  return string.split("").reverse().join("") === string;
};

// solution 2 - using two pointers
// time - O(n) | space - O(1)
const palindrome = function (string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
