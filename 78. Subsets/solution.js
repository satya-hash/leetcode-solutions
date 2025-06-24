/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];

  function backTrack(idx, arr) {
    result.push([...arr]);
    for (let i = idx; i < nums.length; i++) {
      arr.push(nums[idx]);
      backTrack(i + 1, arr);
      arr.pop();
    }
  }
  backTrack(0, []);
  return result;
};
let nums = [1, 2, 3];
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets(nums));
