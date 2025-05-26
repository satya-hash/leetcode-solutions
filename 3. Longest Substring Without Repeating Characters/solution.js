/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0,
    j = 0,
    len = 0;
  let mp = new Map();
  while (j < s.length) {
    if (mp.has(s[j])) {
      i = Math.max(mp.get(s[j]) + 1, i);
    }
    mp.set(s[j], j);
    len = Math.max(len, j - i + 1);
    j++;
  }
  return len;
};
let s = "abcabcbb";
// Output: 3
console.log(lengthOfLongestSubstring(s));
