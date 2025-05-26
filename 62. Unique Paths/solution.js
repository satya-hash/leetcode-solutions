/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let grid = Array.from({ length: m }, () => new Array(n).fill(0));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      let total = 0;
      if (row === 0 && col === 0) grid[row][col] = 1;
      else {
        if (row > 0) {
          total += grid[row - 1][col];
        }
        if (col > 0) {
          total += grid[row][col - 1];
        }
        grid[row][col] = total;
      }
    }
  }
  return grid[m - 1][n - 1];
};
let m = 3,
  n = 7;
// Output: 28
console.log(uniquePaths(m, n));
