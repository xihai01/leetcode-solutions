// solution 1
// time - O(n) | space - O(n)
const caeser = function (message, key) {
  const encryption = [];
  // captalize message
  // loop through each char in message
  for (const char of message) {
    // apply shift method
    encryption.push(shift(char, key % 26));
  }
  // return the string
  return encryption.join("");
};

const shift = function (char, key) {
  let shifted_char = char.charCodeAt(0) + key;
  if (shifted_char > 122) {
    shifted_char = 96 + (shifted_char % 122);
  }
  return String.fromCharCode(shifted_char);
};
