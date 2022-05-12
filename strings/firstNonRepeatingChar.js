// solution 1
// time - O(n) | space - O(n)
function firstNonRepeatingLetter(s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    obj[char] === undefined
      ? (obj[char] = [i, 1]) // [index, occur]
      : obj[char][1]++;
  }

  for (const key in obj) {
    if (obj[key][1] === 1) {
      return obj[key][0];
    }
  }
  return -1;
}

console.log(firstNonRepeatingLetter("abcdcaf"));
