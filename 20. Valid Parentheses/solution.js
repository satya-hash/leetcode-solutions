/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch === "[" || ch === "(" || ch === "{") st.push(ch);
    else {
      if (ch === "]" && st[st.length - 1] === "[") st.pop();
      else if (ch === ")" && st[st.length - 1] === "(") st.pop();
      else if (ch === "}" && st[st.length - 1] === "{") st.pop();
      else return false;
    }
  }
  return !st.length;
};
let s = "()";
// Output: true
console.log(isValid(s));
