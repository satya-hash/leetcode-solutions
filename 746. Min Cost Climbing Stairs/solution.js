/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length === 1) return cost[0];
  if (cost.length === 2) return Math.min(cost[0], cost[1]);
  let dp = new Array(cost.length).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[dp.length - 2], dp[dp.length - 1]);
};
let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// Output: 15
console.log(minCostClimbingStairs(cost));
