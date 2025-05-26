var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

//  Your RecentCounter object will be instantiated and called as such:
var obj = new RecentCounter();
var param_1 = obj.ping(1);
var param_2 = obj.ping(100);
var param_3 = obj.ping(3001);
var param_4 = obj.ping(3002);
console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
