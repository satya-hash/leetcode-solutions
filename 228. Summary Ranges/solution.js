/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  let result = [],
    prev = nums[0],
    len = nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] + 1) {
      if (prev === nums[i - 1]) {
        result.push(`${prev}`);
      } else {
        result.push(`${prev}->${nums[i - 1]}`);
      }
      prev = nums[i];
    }
  }
  if (prev === nums[len - 1]) result.push(`${prev}`);
  else result.push(`${prev}->${nums[len - 1]}`);
  return result;
};

let nums = [0, 1, 2, 4, 5, 7];
// Output: ["0->2","4->5","7"]
console.log(summaryRanges(nums));
