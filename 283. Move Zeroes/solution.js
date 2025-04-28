/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // same concept as bubble sort always bubble the zero to end
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = 0; j < nums.length - 1; j++) {
  //       if (nums[j] === 0) {
  //         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
  //       }
  //     }
  //   }
  // two - pointer approach
  let left = 0,
    right = 0;
  while (right < nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  console.log(nums);
};
let nums = [0, 1, 0, 3, 12];
// output: [1,3,12,0,0]
moveZeroes(nums);
