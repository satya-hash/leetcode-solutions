/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
    let near = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let dist = Math.abs(nums[i]);
        near = Math.min(near, dist);
    }
    return near;
};