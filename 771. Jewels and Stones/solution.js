/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let set = new Set();
  let count = 0;
  for (const jewel of jewels) {
    set.add(jewel);
  }
  for (const stone of stones) {
    if (set.has(stone)) count++;
  }
  return count;
};

let jewels = "aA",
  stones = "aAAbbbb";
// Output: 3
console.log(numJewelsInStones(jewels, stones));
