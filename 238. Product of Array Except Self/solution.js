/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  /**
   * @title answer 1
   */
  //   let pre = new Array(nums.length).fill(1);
  //   let post = new Array(nums.length).fill(1);

  //   for (let i = 1; i < pre.length; i++) {
  //     pre[i] = pre[i - 1] * nums[i - 1];
  //   }
  //   for (let i = post.length - 2; i >= 0; i--) {
  //     post[i] = post[i + 1] * nums[i + 1];
  //   }
  //   for (let i = 0; i < nums.length; i++) {
  //     nums[i] = pre[i] * post[i];
  //   }
  //   return nums;

  /**
   * @title answer 2
   * @followup @question
   */

  let ans = new Array(nums.length).fill(1);
  let prefix = 1,
    suffix = 1;

  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= suffix;
    suffix *= nums[i];
  }
  return ans;
};

let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]
console.log(productExceptSelf(nums));
