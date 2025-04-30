/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let st = [];
  let ans = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (st.length && temperatures[i] > temperatures[st.length - 1]) {
      let idx = st.pop();
      ans[idx] = i - idx;
    }
    st.push(i);
  }
  return ans;
};
let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures(temperatures));
