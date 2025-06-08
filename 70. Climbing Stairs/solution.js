/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let [a, b] = [1, 1];

  for (let i = 0; i < n - 1; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
let n = 2;
console.log(climbStairs(n));
// Output: 2
