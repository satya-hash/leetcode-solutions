/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n, mp = {}) {
  if (n === 1) return 1;
  if (n === 0) return 0;
  if (mp[n]) return mp[n];
  mp[n] = fib(n - 1, mp) + fib(n - 2, mp);
  return mp[n];
};
let n = 2;
// Output: 1
console.log(fib(n));
