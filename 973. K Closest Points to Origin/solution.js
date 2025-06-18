/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  points.sort((a, b) => {
    let d1 = a[0] * a[0] + a[1] * a[1];
    let d2 = b[0] * b[0] + b[1] * b[1];
    return d1 - d2;
  });
  return points.slice(0, k);
};
let points = [
    [1, 3],
    [-2, 2],
  ],
  k = 1;
// Output: [[-2,2]]
console.log(kClosest(points, k));
