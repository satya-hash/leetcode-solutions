/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  let n = image.length,
    m = image[0].length;
  let oldColor = image[sr][sc];
  image[sr][sc] = color;
  bfs(sr, sc);
  function bfs(r, c) {
    let q = [];
    q.push([r, c]);

    while (q.length > 0) {
      let [row, col] = q.shift();
      let direction = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ];
      for (const [dr, dc] of direction) {
        let nr = dr + row,
          nc = dc + col;

        if (
          nr >= 0 &&
          nr < n &&
          nc >= 0 &&
          nc < m &&
          image[nr][nc] === oldColor
        ) {
          image[nr][nc] = color;
          q.push([nr, nc]);
        }
      }
    }
  }
  return image;
};

let image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  sr = 1,
  sc = 1,
  color = 2;
console.log(floodFill(image, sr, sc, color));
// Output: [[2,2,2],[2,2,0],[2,0,1]]
