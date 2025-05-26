/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1;
  let min = nums[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[low] <= nums[high]) {
      min = Math.min(min, nums[low]);
    }
    if (nums[low] <= nums[mid]) {
      min = Math.min(min, nums[low]);
      low = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      high = mid - 1;
    }
  }
  return min;
};
let nums = [3, 4, 5, 1, 2];
// Output: 1
console.log(findMin(nums));
