/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let mp = new Map();
  for (const note of magazine) {
    if (mp.has(note)) mp.set(note, mp.get(note) + 1);
    else mp.set(note, 1);
  }
  for (const note of ransomNote) {
    if (!mp.has(note)) return false;
    mp.set(note, mp.get(note) - 1);
  }
  for (const [key, val] of mp) {
    if (val < 0) return false;
  }
  return true;
};
let ransomNote = "a",
  magazine = "b";
// Output: false
console.log(canConstruct(ransomNote, magazine));
