[<-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](../739.%20Daily%20Temperatures/statement.md)
[Solution](../155.%20Min%20Stack/solution.js)
[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ->](../994.%20Rotting%20Oranges/statement.md)

# 155. Min Stack

**Difficulty:** Medium

**Link:** [LeetCode Problem](https://leetcode.com/problems/min-stack/)

## Description

Design a stack that supports the following operations in **O(1)** time complexity:

- `push(int val)`: Pushes the element `val` onto the stack.
- `pop()`: Removes the element on the top of the stack.
- `top()`: Gets the top element of the stack.
- `getMin()`: Retrieves the minimum element in the stack.

---

## Examples

### Example 1:

**Input:**

```plaintext
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
```

**Output:**

```plaintext
[null,null,null,null,-3,null,0,-2]
```

**Explanation:**

```plaintext
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
```

---

## Constraints

- `-2^31 <= val <= 2^31 - 1`
- Methods `pop`, `top`, and `getMin` will always be called on non-empty stacks.
- At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.
