/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // bucket sort
  let mp = new Map();
  for (const num of nums) {
    mp.set(num, (mp.get(num) || 0) + 1);
  }
  let bucket = new Array(nums.length + 1).fill().map(() => []);
  for (const [num, freq] of mp) {
    bucket[freq].push(num);
  }
  let result = [];
  for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of bucket[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }
  return result;
};
let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
// Output: [1,2]
console.log(topKFrequent(nums, k));
