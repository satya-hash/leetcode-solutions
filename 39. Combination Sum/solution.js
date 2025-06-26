/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  function backTrack(idx, arr, sum) {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      result.push([...arr]);
      return;
    }
    for (let i = idx; i < candidates.length; i++) {
      arr.push(candidates[i]);
      backTrack(i, arr, sum + candidates[i]);
      arr.pop();
    }
  }
  backTrack(0, [], 0);
  return result;
};
let candidates = [2, 3, 6, 7],
  target = 7;
// Output: [[2,2,3],[7]]
console.log(combinationSum(candidates, target));
