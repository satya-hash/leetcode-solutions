/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];
  function backTrack(idx, arr) {
    if (arr.length === k) {
      result.push([...arr]);
      return;
    }
    for (let i = idx; i <= n; i++) {
      arr.push(i);
      backTrack(i + 1, arr);
      arr.pop();
    }
  }
  backTrack(1, []);
  return result;
};
let n = 4,
  k = 2;
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(n, k));
