/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) right--;
    else return [left + 1, right + 1];
  }
};
let numbers = [2, 7, 11, 15],
  target = 9;
// Output: [1,2]
console.log(twoSum(numbers, target));
