[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../933.%20Number%20of%20Recent%20Calls/statement.md)
[Solution](../232.%20Implement%20Queue%20using%20Stacks/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../876.%20Middle%20of%20the%20Linked%20List/statement.md)

# 232. Implement Queue using Stacks

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/implement-queue-using-stacks/)

---

## Description

Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (`push`, `peek`, `pop`, and `empty`).

### Implement the `MyQueue` class:

- `void push(int x)`: Pushes element `x` to the back of the queue.
- `int pop()`: Removes the element from the front of the queue and returns it.
- `int peek()`: Returns the element at the front of the queue.
- `boolean empty()`: Returns `true` if the queue is empty, `false` otherwise.

---

## Examples

### Example 1:

**Input:**

```plaintext
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
```

**Output:**

```plaintext
[null, null, null, 1, 1, false]
```

**Explanation:**

```plaintext
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek();  // return 1
myQueue.pop();   // return 1, queue is [2]
myQueue.empty(); // return false
```

---

## Constraints

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
- All the calls to `pop` and `peek` are valid.

---

## Follow-up

Can you implement the queue such that each operation is **amortized O(1)** time complexity? In other words, performing `n` operations will take overall `O(n)` time even if one of those operations may take longer.
