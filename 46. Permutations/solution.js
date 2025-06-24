/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  function backTrack(arr, used) {
    if (arr.length === nums.length) {
      result.push([...arr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      arr.push(nums[i]);
      backTrack(arr, used);
      arr.pop();
      used[i] = false;
    }
  }
  backTrack([], []);
  return result;
};
let nums = [1, 2, 3];
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute(nums));
