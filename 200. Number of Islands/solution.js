/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let islands = 0;
  let rows = grid.length;
  let cols = grid[0].length;
  let visited = new Array(rows).fill(new Array(cols).fill(false));
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === "1" && !visited[row][col]) {
        islands++;
        dfs(row, col);
      }
    }
  }
  function dfs(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      visited[row][col] !== false
    )
      return;
    visited[row][col] = true;
    dfs(row + 1, col);
    dfs(row, col + 1);
    dfs(row - 1, col);
    dfs(row, col - 1);
  }

  return islands;
};
let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
// Output: 1
console.log(numIslands(grid));
