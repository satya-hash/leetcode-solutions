/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^0-9A-Za-z]/gi, "").toLocaleLowerCase();

  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
let s = "A man, a plan, a canal: Panama";
// Output: true
console.log(isPalindrome(s));
