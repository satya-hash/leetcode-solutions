/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  /**
   * @iterative
   */
  //   let res = 0;
  //   if (n < 5) return 0;
  //   else {
  //     while (n > 0) {
  //       res += Math.floor(n / 5);
  //       n = Math.floor(n / 5);
  //     }
  //     return res;
  //   }
  /**
   * @recursive
   */
  if (n < 5) return 0;
  return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
};
let n = 3;
// Output: 0
console.log(trailingZeroes(n));
