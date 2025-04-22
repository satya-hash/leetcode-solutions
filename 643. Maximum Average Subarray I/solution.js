/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0,
    max = -Infinity;
  let i = 0;
  while (i < k) {
    sum += nums[i++];
  }
  max = Math.max(max, sum / k);
  while (i < nums.length) {
    sum -= nums[i - k];
    sum += nums[i++];
    max = Math.max(max, sum / k);
  }
  return max;
};
let nums = [1, 12, -5, -6, 50, 3],
  k = 4;
// Output: 12.75000
console.log(findMaxAverage(nums, k));
