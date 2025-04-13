/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0,
    sum = 0;
  let mp = new Map();
  mp.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (mp.has(sum - k)) count += mp.get(sum - k);
    mp.set(sum, (mp.get(sum) || 0) + 1);
  }
  return count;
};

let nums = [1, 2, 3],
  k = 3;
// Output: 2
console.log(subarraySum(nums, k));
