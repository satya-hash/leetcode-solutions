/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];
  let result = [];
  let mp = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  backTrack(0, "");
  function backTrack(idx, str) {
    if (str.length === digits.length) {
      result.push(str);
      return;
    }
    for (const s of mp[digits[idx]]) {
      backTrack(idx + 1, str + s);
    }
  }
  return result;
};
let digits = "23";
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(digits));
