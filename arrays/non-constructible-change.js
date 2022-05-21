// solution 1
// time - O(nlogn) || space - O(1)
const nonConstructibleChange = function (coins) {
  let accumlatorChange = 1;
  coins.sort((a, b) => a - b);

  for (let coin of coins) {
    if (coin > accumlatorChange) {
      return accumlatorChange;
    }
    accumlatorChange += coin;
  }
  return accumlatorChange;
};

console.log(nonConstructibleChange([1, 2, 5]));
