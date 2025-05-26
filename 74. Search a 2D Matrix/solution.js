/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length,
    cols = matrix[0].length;
  let low = 0,
    high = rows * cols - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let dx = Math.floor(mid / cols);
    let dy = mid % cols;
    let val = matrix[dx][dy];
    if (val === target) return true;
    else if (val < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};
let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;
// Output: true
console.log(searchMatrix(matrix, target));
