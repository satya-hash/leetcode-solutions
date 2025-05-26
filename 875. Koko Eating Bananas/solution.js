/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  function findTotal(val) {
    let total = 0;
    piles.forEach((p) => (total += Math.ceil(p / val)));
    return total;
  }
  let low = 0,
    high = Math.max(...piles);
  let min = 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let sum = findTotal(mid);
    if (sum <= h) {
      min = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return min;
};
let piles = [3, 6, 7, 11],
  h = 8;
// Output: 4
console.log(minEatingSpeed(piles, h));
