/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let n = grid.length,
    m = grid[0].length;
  let queue = [];
  let visited = Array.from({ length: n }, () => Array(m).fill(false));
  // visited grid
  //   update the grid the true if the orange is rotten

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
        visited[row][col] = true;
      }
    }
  }
  let count = -1;
  let direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  //   bfs
  // first rotten orange push to queue then check in all direction
  while (queue.length > 0) {
    let size = queue.length;
    count++;
    for (let i = 0; i < size; i++) {
      let [row, col] = queue.shift();
      //   checking in all direction to find the rotten orange
      for (const [dx, dy] of direction) {
        let nx = row + dx;
        let ny = col + dy;
        // if direction or adj orange has 1 and not visited then update to rotten orange
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          !visited[nx][ny] &&
          grid[nx][ny] === 1
        ) {
          visited[nx][ny] = true;
          grid[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
  }
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (grid[row][col] === 1) {
        return -1;
      }
    }
  }
  return count === -1 ? 0 : count;
};
let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
// output 4
console.log(orangesRotting(grid));
