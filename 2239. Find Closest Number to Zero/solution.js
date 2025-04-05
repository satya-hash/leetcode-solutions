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

let nums = [-4, -2, 1, 4, 8]
// output 1
console.log(findClosestNumber(nums))