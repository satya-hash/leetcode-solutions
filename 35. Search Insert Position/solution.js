/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  let res = high + 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] < target) low = mid + 1;
    else {
      high = mid - 1;
      res = mid;
    }
  }
  return res;
};
let nums = [1, 3, 5, 6],
  target = 5;
// Output: 2
console.log(searchInsert(nums, target));
