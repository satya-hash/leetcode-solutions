/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let n = isConnected.length;
  let seen = new Array(n).fill(false);
  let provinces = 0;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      provinces++;
      seen[i] = true;
      dfs(i);
    }
  }
  function dfs(city) {
    for (let i = 0; i < n; i++) {
      if (isConnected[city][i] === 1 && !seen[i]) {
        seen[i] = true;
        dfs(i);
      }
    }
  }
  return provinces;
};
let isConnected = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
// Output: 2
console.log(findCircleNum(isConnected));
