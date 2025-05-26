/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return mid;
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    } else {
      if (nums[mid] <= target && target <= nums[high]) {
        low = mid + 1;
      } else high = mid - 1;
    }
  }
  return -1;
};
let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
// Output: 4
console.log(search(nums, target));
