/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === s.length;
};

let s = "abc",
  t = "ahbgdc";
// output true
console.log(isSubsequence(s, t));

// follow up question answer
let seqs = ["abc", "ace", "aec", "cab", "cbe"],
  str = "abcabcabce";
console.log(isSubSeq(seqs, str));
function isSubSeq(seqs, str) {
  let mp = new Map();
  for (let i = 0; i < str.length; i++) {
    let s = str[i];
    if (mp.has(s)) {
      mp.set(s, [...mp.get(s), i]);
    } else mp.set(s, [i]);
  }
  let res = [];
  for (const seq of seqs) {
    let prev = -1;
    let valid = true;

    for (const ch of seq) {
      if (!mp.has(ch)) {
        valid = false;
        break;
      }
      const nextIndex = upperBound(mp.get(ch), prev);
      if (nextIndex === -1) {
        valid = false;
        break;
      }
      prev = nextIndex;
    }
    res.push(valid);
  }
  return res;
}
function upperBound(arr, target) {
  let left = 0,
    right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) right = mid;
    else left = mid + 1;
  }
  return left < arr.length ? arr[left] : -1;
}
