/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let mp = new Map(),
    sum = 0,
    maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1;
    if (sum === 0) {
      maxLen = i + 1;
    } else if (mp.has(sum)) {
      maxLen = Math.max(maxLen, i - mp.get(sum));
    } else mp.set(sum, i);
  }
  return maxLen;
};

let nums = [0, 1, 0];
// output 6
console.log(findMaxLength(nums));
