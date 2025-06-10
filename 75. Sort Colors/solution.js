/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let start = 0,
    end = nums.length - 1,
    mid = 0;
  while (mid <= end) {
    if (nums[mid] === 0) {
      [nums[start], nums[mid]] = [nums[mid], nums[start]];
      start++;
      mid++;
    } else if (nums[mid] === 2) {
      [nums[end], nums[mid]] = [nums[mid], nums[end]];
      end--;
    } else {
      mid++;
    }
  }
};

let nums = [2, 0, 2, 1, 1, 0];
// Output: [0,0,1,1,2,2]
sortColors(nums);
console.log(nums);
