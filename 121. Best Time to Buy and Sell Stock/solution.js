/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profits = -Infinity;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    profits = Math.max(profits, prices[i] - buy);
  }

  return profits === -Infinity ? 0 : profits;
};

let prices = [7, 6, 4, 3, 1];
// output 5
console.log(maxProfit(prices));
