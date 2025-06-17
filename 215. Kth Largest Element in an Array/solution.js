class minHeap {
  constructor() {
    this.heap = [];
  }
  getParent(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeft(i) {
    return i * 2 + 1;
  }
  getRight(i) {
    return i * 2 + 2;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  insert(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(i) {
    while (i > 0 && this.heap[i] < this.heap[this.getParent(i)]) {
      this.swap(i, this.getParent(i));
      i = this.getParent(i);
    }
  }
  getMinimum() {
    if (this.heap.length === 0) {
      return 0;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }
  bubbleDown(i) {
    let smallest = i;
    let left = this.getLeft(i);
    let right = this.getRight(i);
    if (left < this.heap.length && this.heap[left] < this.heap[smallest])
      smallest = left;
    if (right < this.heap.length && this.heap[right] < this.heap[smallest])
      smallest = right;
    if (smallest !== i) {
      this.swap(smallest, i);
      this.bubbleDown(smallest);
    }
  }
  peek() {
    return this.heap[0] || 0;
  }
  size() {
    return this.heap.length;
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new minHeap();

  for (let num of nums) {
    heap.insert(num);
    if (heap.size() > k) heap.getMinimum();
  }
  return heap.peek();
};
let nums = [3, 2, 1, 5, 6, 4],
  k = 2;
// Output: 5;
console.log(findKthLargest(nums, k));
