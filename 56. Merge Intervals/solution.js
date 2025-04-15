/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  let res = [];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (prev[1] >= cur[0]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      res.push(prev);
      prev = cur;
    }
  }
  res.push(prev);
  return res;
};

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
// let intervals = [
//   [1, 4],
//   [4, 5],
// ];
// Output: [[1,6],[8,10],[15,18]]
// Output: [[1,5]]
console.log(merge(intervals));
