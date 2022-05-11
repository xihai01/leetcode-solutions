// solution 1
// time - O(n) | space - O(n)
const caeser = function (message, key) {
  const encryption = [];
  // captalize message
  // loop through each char in message
  for (const char of message) {
    // apply shift method
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      encryption.push(shift(char, key));
    } else {
      encryption.push(char);
    }
  }
  // return the string
  return encryption.join("");
};

const shift = function (char, key) {
  shifted_char = char.charCodeAt(0) + key;
  if (shifted_char > 122) {
    shifted_char = 96 + (shifted_char % 122);
  }
  return String.fromCharCode(shifted_char);
};
