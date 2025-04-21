/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let i = 0,
    sum = nums[i],
    max = nums[i],
    j = 0;
  for (j = 1; j < nums.length; j++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[j];
    max = Math.max(max, sum);
  }
  return max;
};

/**
 * Divide & conquer approach for follow up
 */

var MaxSubArr = function (nums) {
  let helper = (left, right) => {
    if (left === right) return nums[left];
    let mid = Math.floor((left + right) / 2);
    let leftSum = helper(left, mid);
    let rightSum = helper(mid + 1, right);
    let crossSum = maxCrossSum(nums, left, mid, right);
    return Math.max(leftSum, rightSum, crossSum);
  };
  let maxCrossSum = (nums, left, mid, right) => {
    let sum = 0,
      leftSum = -Infinity;

    for (let i = mid; i >= left; i--) {
      sum += nums[i];
      leftSum = Math.max(leftSum, sum);
    }
    let rightSum = -Infinity;
    sum = 0;
    for (let i = mid + 1; i <= right; i++) {
      sum += nums[i];
      rightSum = Math.max(rightSum, sum);
    }
    return leftSum + rightSum;
  };
  return helper(0, nums.length - 1);
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Output: 6
console.log(maxSubArray(nums));
console.log(MaxSubArr(nums));
