/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let len = nums.length;
  let vis = new Array(len).fill(false);
  vis[len - 1] = true;
  for (let i = len - 2; i >= 0; i--) {
    let val = nums[i];
    for (let j = i + 1; j <= val + i && j < len; j++) {
      if (vis[j] === true) {
        vis[i] = true;
        break;
      }
    }
  }
  return vis[0];
  /**
   * @Another @approach
   */
  //   let goal=len-1;
  // for(let i=len-2;i>=0;i--){
  //     if(i+nums[i]>=goal) goal=i
  // }
  // return goal===0;
};
let nums = [2, 3, 1, 1, 4];
// Output: true
console.log(canJump(nums));
