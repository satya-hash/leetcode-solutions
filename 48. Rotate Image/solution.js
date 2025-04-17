/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix[0].length - 1,
    m = matrix.length - 1;
  //   for (let i = 0; i <= n; i++) {
  //     for (let j = 0; j <= i; j++) {
  //       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  //     }
  //   }
  //   for (const row of matrix) {
  //     let i = 0,
  //       j = row.length - 1;
  //     while (i < j) {
  //       [row[i], row[j]] = [row[j], row[i]];
  //       i++;
  //       j--;
  //     }
  //   }
  //   another approach
  // reverse the matrix and then swap the lower triangle
  matrix.reverse();
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  console.log(matrix);
};

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [[7,4,1],[8,5,2],[9,6,3]]
rotate(matrix);
