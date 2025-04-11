/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let cmp = strs[0],
    length = cmp.length;
  for (let i = 1; i < strs.length; i++) {
    let j = 0,
      str = strs[i];
    while (j < cmp.length && j < str.length) {
      if (cmp[j] === str[j]) {
        j++;
      } else break;
    }
    length = Math.min(length, j);
  }

  return cmp.substring(0, length);
};

let strs = ["flower", "flow", "flight"];
// output "fl"
console.log(longestCommonPrefix(strs));
