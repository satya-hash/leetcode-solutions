/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let low = 0,
    high = num;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let val = mid * mid;
    if (val === num) return true;
    else if (val < num) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};
let num = 16;
// Output: true
console.log(isPerfectSquare(num));
