var MyQueue = function () {
  this.st1 = [];
  this.st2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.st1.length === 0) this.st1.push(x);
  else {
    while (this.st1.length > 0) {
      this.st2.push(this.st1.pop());
    }
    this.st1.push(x);
    while (this.st2.length > 0) {
      this.st1.push(this.st2.pop());
    }
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  console.log(this.st1);
  return this.st1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.st1[this.st1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  console.log(this.st1);
  return !this.st1.length;
};

//  Your MyQueue object will be instantiated and called as such:
var obj = new MyQueue();
obj.push(1);
var param_3 = obj.peek();
var param_2 = obj.pop();
var param_4 = obj.empty();
console.log(param_2, param_3, param_4);
