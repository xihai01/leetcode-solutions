// solution 1
// time - O(n) | space - O(n)
const runLengthEncoding = function (str) {
  const output = [];
  let char = str[0];
  let occurences = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== char || occurences === 9) {
      output.push(occurences);
      output.push(char);
      char = str[i];
      occurences = 1;
    } else {
      occurences++;
    }
  }

  return output.join(""); // << fix this
};

console.log(runLengthEncoding("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"));
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
