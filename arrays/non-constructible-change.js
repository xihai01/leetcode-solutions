// solution 1
// time - O(nlogn) || space - O(1)
const nonConstructibleChange = function (coins) {
  let accumlatorChange = 1;
  coins.sort((a, b) => a - b);

  for (let coin of coins) {
    if (coin > accumlatorChange) {
      return accumlatorChange + 1;
    }
    accumlatorChange += 1;
  }
  return accumlatorChange;
};

console.log(nonConstructibleChange([1, 2, 5]));
