// solution 1
// time - O(n) | space - O(n)
const generateDocument = function (characters, document) {
  const charObj = {};
  const docObj = {};

  for (const char of characters) {
    charObj[char] === undefined ? (charObj[char] = 1) : charObj[char]++;
  }

  for (const char of document) {
    docObj[char] === undefined ? (docObj[char] = 1) : docObj[char]++;
  }

  // loop through docObj and see if enough chars exists in characters
  for (const key in docObj) {
    if (charObj[key] === undefined || charObj[key] < docObj[key]) {
      return false;
    }
  }
  return true;
};

// solution 2
// same as solution 1
const generateDocument = function (characters, document) {
  const charObj = {};
  const docObj = {};

  const charLength = characters.length;
  const docLength = document.length;

  for (let i = 0; i < charLength + docLength; i++) {
    if (i < charLength) {
      // add to char
      charObj[characters[i]] === undefined
        ? (charObj[characters[i]] = 1)
        : charObj[characters[i]]++;
    } else {
      // add to doc
      docObj[document[i - charLength]] === undefined
        ? (docObj[i - charLength] = 1)
        : docObj[i - charLength]++;
    }
  }

  // loop through docObj and see if enough chars exists in characters
  for (const key in docObj) {
    if (charObj[key] === undefined || charObj[key] < docObj[key]) {
      return false;
    }
  }
  return true;
};
