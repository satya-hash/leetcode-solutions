/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // this will fail for extra large num size
  let long = 0;
  let set = new Set(nums);
  for (const n of nums) {
    if (!set.has(n - 1)) {
      let len = 1;
      while (set.has(n + len)) {
        len++;
      }
      long = Math.max(long, len);
    }
  }
  return long;
  /**another approach */
  /**
   * let long=0,length=0;
   * if(!nums.length)return 0;
   * nums.sort((a,b)=>a-b);
   *     for (let i = 0; i < nums.length; i++) {
             if (nums[i] === nums[i + 1]) {
                continue;
            }
            else if (nums[i] + 1 !== nums[i + 1]) {
                long = Math.max(long, length);
                length = 1;
            } else {
            length++;
        }
   * return Math.max(length,long);
   */
};
let nums = [100, 4, 200, 1, 3, 2];
// Output: 4
console.log(longestConsecutive(nums));
