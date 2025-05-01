var MinStack = function () {
  this.st = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let min = this.getMin();
  if (min === null || min > val) min = val;
  this.st.push([val, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.st.length ? this.st[this.st.length - 1][0] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.st.length ? this.st[this.st.length - 1][1] : null;
};

// Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(1);
obj.push(2);
obj.push(-3);
obj.push(5);
obj.push(4);
obj.pop();
var param_3 = obj.top();
var param_4 = obj.getMin();
console.log(param_3);
console.log(param_4);
